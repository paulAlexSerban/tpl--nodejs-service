#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo "🟢 STOP DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker stop web-server
docker ps