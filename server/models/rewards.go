package models

type Reward struct {
	ID         uint     `gorm:"primaryKey"`
	Multiplier uint     `gorm:"not null;column:multiplier" json:"multiplier"`
	CategoryID Category `gorm:"not null;category_id;foreignKey:ID" json:"category_id"`
}
