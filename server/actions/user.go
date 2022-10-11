package actions

import "github.com/davidalvarez305/cc_maximizer/server/models"

type User struct {
	*models.User
}

func (user *User) Save() error {
	err := Save(&user)

	if err != nil {
		return err
	}

	return nil
}

func (user *User) Delete() error {
	err := Delete(&user)

	if err != nil {
		return err
	}

	return nil
}
