#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "🟢 RUN DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker run -p 3000:3000 --name express-api-server -d paulserbandev/express-api-server
docker ps