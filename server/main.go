package main

import (
	"log"
	"os"

	"github.com/davidalvarez305/cc_maximizer/server/database"
	"github.com/davidalvarez305/cc_maximizer/server/routes"
	"github.com/davidalvarez305/cc_maximizer/server/sessions"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading env file.")
	}

	CLIENT_URL := os.Getenv("CLIENT_URL")
	PORT := os.Getenv("PORT")

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     CLIENT_URL,
		AllowCredentials: true,
	}))

	database.Connect()
	sessions.Init()

	routes.Router(app)
	app.Listen(":" + PORT)
}
