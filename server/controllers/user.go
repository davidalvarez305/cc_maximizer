package controllers

import (
	"github.com/davidalvarez305/cc_maximizer/server/handlers"
	"github.com/gofiber/fiber/v2"
)

func User(router fiber.Router) {

	user := router.Group("user")

	user.Get("/", handlers.GetUser)
	user.Put("/", handlers.UpdateUser)
	user.Post("/", handlers.CreateUser)
	user.Delete("/", handlers.Delete)
	user.Put("/picture", handlers.ChangeProfilePicture)
	user.Post("/login", handlers.Login)
	user.Post("/logout", handlers.Logout)
}
