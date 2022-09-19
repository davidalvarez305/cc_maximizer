package models

type CreditCard struct {
	ID      uint   `json:"id"`
	Name    string `gorm:"unique;not null" json:"name"`
	BankID  uint   `gorm:"not null;column:bank_id;foreignKey:ID" json:"bank_id"`
	Bank    Bank
	Rewards []Reward `gorm:"many2many:credit_card_rewards" json:"rewards"`
}
