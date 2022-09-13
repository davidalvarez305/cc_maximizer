package models

type Wallet struct {
	ID          uint         `gorm:"primaryKey"`
	UserID      uint         `gorm:"not null;unique;column:user_id" json:"user_id"`
	CreditCards []CreditCard `gorm:"many2many:wallet_credit_cards;column:credit_cards" json:"credit_cards"`
}
