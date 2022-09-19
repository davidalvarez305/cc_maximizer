package models

type Bank struct {
	ID   uint   `gorm:"primaryKey" json:"id"`
	Name string `gorm:"unique;not null" json:"name"`
	Logo string `json:"logo"`
}
