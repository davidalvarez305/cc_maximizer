package models

type Reward struct {
	ID         uint     `gorm:"primaryKey"`
	Multiplier uint     `gorm:"column:multiplier" json:"multiplier"`
	Category   Category `gorm:"category_id" json:"category_id"`
}
