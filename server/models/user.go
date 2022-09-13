package models

type Users struct {
	ID           uint   `gorm:"primaryKey" json:"id"`
	Username     string `gorm:"unique;not null" json:"username"`
	Password     string `gorm:"not null" json:"password"`
	Email        string `gorm:"unique;not null" json:"email"`
	ProfileImage string `gorm:"null:true;default:null" json:"profile_image"`
	WalletID     Wallet `gorm:"null:true;column:wallet_id;foreignKey:ID" json:"wallet_id"`
}
