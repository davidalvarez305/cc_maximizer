package models

type Wallet struct {
	ID          uint         `gorm:"primaryKey"`
	UserID      uint         `gorm:"unique;column:user_id" json:"user_id"`
	CreditCards []CreditCard `gorm:"column:credit_cards" json:"credit_cards"`
}
