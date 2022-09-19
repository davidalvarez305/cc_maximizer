package models

import "time"

type User struct {
	ID           uint         `json:"id"`
	Username     string       `gorm:"unique;not null" json:"username"`
	Password     string       `gorm:"not null" json:"password"`
	Email        string       `gorm:"unique;not null" json:"email"`
	ProfileImage string       `gorm:"null:true" json:"profile_image"`
	CreatedAt    time.Time    `gorm:"autoCreateTime" json:"created_at"`
	CreditCards  []CreditCard `gorm:"many2many:user_credit_cards" json:"credit_cards"`
}
