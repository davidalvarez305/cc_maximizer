package models

type Users struct {
	ID           uint   `gorm:"primaryKey" json:"id"`
	Username     string `gorm:"unique" json:"username"`
	Password     string `json:"password"`
	Email        string `gorm:"unique" json:"email"`
	ProfileImage string `gorm:"null:true" json:"profile_image"`
	Wallet       Wallet `gorm:"column:wallet_id" json:"wallet_id"`
}
