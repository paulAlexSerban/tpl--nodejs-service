#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "🟢 BUILD DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker build --file ../Dockerfile ../ -t paulserbandev/express-api-server --build-arg NODE_ENV=production
docker image ls
