package controllers

import (
	"backend/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCoffees(c *gin.Context){
	var coffees []models.Coffee 

	capochino := models.Coffee {
		ID:1,
		Name: "Cappuccino",
		Price: 3.5,
		Discount: 0.5,
		Description: "Test",
		ImageURL: "https://example.com",
	}
	coffees = append(coffees, capochino)
	c.JSON(http.StatusOK, coffees)
}

