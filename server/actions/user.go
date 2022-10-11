package actions

import (
	"fmt"
	"mime/multipart"

	"github.com/davidalvarez305/cc_maximizer/server/database"
	"github.com/davidalvarez305/cc_maximizer/server/models"
	"github.com/davidalvarez305/cc_maximizer/server/sessions"
	"github.com/davidalvarez305/cc_maximizer/server/utils"
	"github.com/gofiber/fiber/v2"
)

type User struct {
	*models.User
}

func (user *User) GetUserById(userId string) error {
	result := database.DB.Where("id = ?", userId).First(&user)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (user *User) GetUserFromSession(c *fiber.Ctx) *User {
	sess, err := sessions.Sessions.Get(c)

	if err != nil {
		return nil
	}

	userId := sess.Get("userId")

	if userId == nil {
		return nil
	}

	uId := fmt.Sprintf("%v", userId)

	err = user.GetUserById(uId)

	if err != nil {
		return nil
	}

	return user
}

func (user *User) Save() error {
	err := Save(&user)

	if err != nil {
		return err
	}

	return nil
}

func (user *User) Delete() error {
	err := Delete(&user)

	if err != nil {
		return err
	}

	return nil
}

func (user *User) ChangeProfilePicture(file *multipart.FileHeader) error {

	fileName, err := utils.UploadImageToS3(file)

	if err != nil {
		return err
	}

	user.ProfileImage = fileName

	err = user.Save()

	if err != nil {
		return err
	}

	return nil
}
