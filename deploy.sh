#!/bin/bash

# deploys built frontend to google cloud
BUCKET=$1
URL="gs://$BUCKET"
SOURCE_DIR="build"

# build react website
yarn build

# remove existing folder and reupload all files setting permission to all
gsutil -m rsync -d -r $SOURCE_DIR $URL
gsutil -m acl -r ch -u AllUsers:R $URL
