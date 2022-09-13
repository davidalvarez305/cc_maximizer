package models

type CreditCard struct {
	ID      uint     `gorm:"primaryKey" json:"id"`
	Name    string   `gorm:"unique" json:"name"`
	BankID  Bank     `gorm:"column:bank_id" json:"bank_id"`
	Rewards []Reward `gorm:"column:rewards" json:"rewards"`
}
