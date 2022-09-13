package models

type CreditCard struct {
	ID      uint     `gorm:"primaryKey" json:"id"`
	Name    string   `gorm:"unique;not null" json:"name"`
	BankID  Bank     `gorm:"not null;column:bank_id;foreignKey:ID" json:"bank_id"`
	Rewards []Reward `gorm:"many2many:credit_card_rewards;column:rewards" json:"rewards"`
}
