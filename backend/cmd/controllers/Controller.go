package controllers

import (
	"backend/internal/database"
	"backend/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCoffees(c *gin.Context){
	rows, err := database.DB.Query("SELECT id, name, price, discount, description, image FROM coffees")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var coffees []models.Coffee

	for rows.Next() {
		var coffee models.Coffee
		if err := rows.Scan(&coffee.ID, &coffee.Name, &coffee.Price, &coffee.Discount, &coffee.Description, &coffee.Image); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		coffees = append(coffees, coffee)
	}

	c.JSON(http.StatusOK, coffees)
}
