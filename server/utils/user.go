package utils

import (
	"context"
	"mime/multipart"
	"os"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func UploadImageToS3(file *multipart.FileHeader) error {
	ctx := context.TODO()
	var bucketName = os.Getenv("AWS_S3_BUCKET")
	var key = "profile-pictures/" + file.Filename
	cache := "31536000"

	cfg, err := config.LoadDefaultConfig(ctx)

	if err != nil {
		return err
	}

	contents, err := file.Open()

	if err != nil {
		return err
	}

	params := s3.PutObjectInput{
		Bucket:       &bucketName,
		Key:          &key,
		Body:         contents,
		CacheControl: &cache,
	}

	client := s3.NewFromConfig(cfg)

	_, err = client.PutObject(ctx, &params)

	if err != nil {
		return err
	}

	return nil
}
