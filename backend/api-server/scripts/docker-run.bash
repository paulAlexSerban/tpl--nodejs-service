#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo "🟢 RUN DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker run -p 3000:3000 --name api-server -d paulserbandev/api-server
docker ps