package models

type Category struct {
	ID   uint   `json:"id"`
	Name string `gorm:"not null" json:"name"`
}
