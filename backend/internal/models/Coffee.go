package models

type Coffee struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Price       float64 `json:"price"`
	Discount    float64 `json:"discount"`
	Description string  `json:"description"`
	Image       string  `json:"image"`
}