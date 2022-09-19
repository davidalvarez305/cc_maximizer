package actions

import (
	"github.com/davidalvarez305/cc_maximizer/server/database"
)

func Save(item interface{}) (interface{}, error) {
	result := database.DB.Save(item)

	if result.Error != nil {
		return item, result.Error
	}

	return item, nil
}
