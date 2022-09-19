package models

type Reward struct {
	ID         uint `json:"id"`
	Multiplier uint `gorm:"not null" json:"multiplier"`
	CategoryID uint `gorm:"not null;category_id;foreignKey:ID" json:"category_id"`
	Category   Category
}
