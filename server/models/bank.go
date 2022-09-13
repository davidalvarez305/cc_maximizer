package models

type Bank struct {
	ID          uint         `gorm:"primaryKey" json:"id"`
	Name        string       `gorm:"unique;not null" json:"name"`
	Logo        string       `json:"logo"`
	CreditCards []CreditCard `gorm:"column:credit_cards" json:"credit_cards"`
}
