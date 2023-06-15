#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo "🟢 RUN DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker run -p 3000:3000 --name web-server -d paulserbandev/web-server
docker ps