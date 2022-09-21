package handlers

import (
	"encoding/gob"
	"strings"

	"github.com/davidalvarez305/cc_maximizer/server/actions"
	"github.com/davidalvarez305/cc_maximizer/server/database"
	"github.com/davidalvarez305/cc_maximizer/server/models"
	"github.com/davidalvarez305/cc_maximizer/server/sessions"
	"github.com/davidalvarez305/cc_maximizer/server/types"
	"github.com/davidalvarez305/cc_maximizer/server/utils"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(c *fiber.Ctx) error {
	var u *models.User
	err := c.BodyParser(&u)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"data": "Unable to Parse Request Body.",
		})
	}

	if u.Password == "" || u.Username == "" {
		return c.Status(400).JSON(fiber.Map{
			"data": "Missing Fields.",
		})
	}

	if len(u.Password) < 8 {
		return c.Status(400).JSON(fiber.Map{
			"data": "Password must be at least of 8 characters in length.",
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	u.Password = string(hashedPassword)

	err = actions.Save(u)

	if err != nil {

		if strings.Contains(err.Error(), "duplicate key") {
			return c.Status(400).JSON(fiber.Map{
				"data": "That username or e-mail has been taken.",
			})
		}

		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	return c.Status(201).JSON(fiber.Map{
		"data": u,
	})
}

func Login(c *fiber.Ctx) error {
	var u models.User
	gob.Register(u)
	err := c.BodyParser(&u)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"data": "Bad Input.",
		})
	}

	userPassword := u.Password

	result := database.DB.Where("email = ?", &u.Email).First(&u)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"data": "Incorrect e-mail.",
		})
	}

	err = bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(userPassword))

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"data": "Incorrect password.",
		})
	}

	sess, err := sessions.Sessions.Get(c)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	sess.Set("userId", u.ID)

	err = sess.Save()

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": u,
	})
}

func Logout(c *fiber.Ctx) error {
	var user models.User
	gob.Register(user)
	sess, err := sessions.Sessions.Get(c)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	if err := sess.Destroy(); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": "Logged out!",
	})
}

func GetUser(c *fiber.Ctx) error {
	var user models.User
	gob.Register(user)
	sess, err := sessions.Sessions.Get(c)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	userId := sess.Get("userId")

	if userId == nil {
		return c.Status(404).JSON(fiber.Map{
			"data": "Not found.",
		})
	}

	result := database.DB.Where("id = ?", userId).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"data": result.Error.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": user,
	})
}

func UpdateUser(c *fiber.Ctx) error {
	var user models.User
	gob.Register(user)
	var p types.ChangePasswordInput
	err := c.BodyParser(&p)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"data": "Unable to Parse Request Body.",
		})
	}

	if len(p.NewPassword) < 8 {
		return c.Status(400).JSON(fiber.Map{
			"data": "Password must be at least of 8 characters in length.",
		})
	}

	sess, err := sessions.Sessions.Get(c)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	userId := sess.Get("userId")

	if userId == nil {
		return c.Status(404).JSON(fiber.Map{
			"data": "Not found.",
		})
	}

	result := database.DB.Where("id = ?", userId).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"data": result.Error.Error(),
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(p.NewPassword), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	user.Password = string(hashedPassword)

	err = actions.Save(&user)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": user,
	})
}

func ChangeProfilePicture(c *fiber.Ctx) error {
	var user models.User
	gob.Register(user)

	file, err := c.FormFile("image")

	if err != nil {
		return err
	}

	err = utils.UploadImageToS3(file)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": "Could not upload image",
		})
	}

	sess, err := sessions.Sessions.Get(c)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	userId := sess.Get("userId")

	if userId == nil {
		return c.Status(404).JSON(fiber.Map{
			"data": "Not found.",
		})
	}

	result := database.DB.Where("id = ?", userId).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"data": result.Error.Error(),
		})
	}

	user.ProfileImage = file.Filename

	err = actions.Save(&user)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"data": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": user,
	})
}
