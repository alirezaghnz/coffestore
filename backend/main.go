package main

import (
	"backend/cmd/routes"
	"backend/internal/database"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)


func main() {
	
	//connect to the database
	database.InitDB()
	defer database.DB.Close()

	// Set the router as the default one shipped with Gin
	r := gin.Default()

    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge: 12 * time.Hour,
    }))

	routes.SetupCoffeesRoutes(r)

	// r.GET("/", func(c *gin.Context) {
	//	c.JSON(200, gin.H{
	//		"message": "Hello, World",
	//	})
	//}) 

	//r.GET("/", Hello)

	r.Run(":8080") // listen and serv on Port 8080
}