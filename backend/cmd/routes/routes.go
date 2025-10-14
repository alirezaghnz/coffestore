package routes

import (
	"backend/cmd/controllers"

	"github.com/gin-gonic/gin"
)

func SetupCoffeesRoutes(r *gin.Engine) {
	coffeeRoutes := r.Group("/coffees")
	{
		coffeeRoutes.GET("/", controllers.GetCoffees)
		
	}
}