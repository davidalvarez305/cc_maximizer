package actions

import (
	"github.com/davidalvarez305/cc_maximizer/server/database"
)

func Save(item interface{}) error {
	result := database.DB.Save(item)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func Delete(item interface{}) error {
	result := database.DB.Delete(item)

	if result.Error != nil {
		return result.Error
	}

	return nil
}
