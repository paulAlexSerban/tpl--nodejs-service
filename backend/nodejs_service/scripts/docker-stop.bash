#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "🟢 STOP DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
docker stop nodejs_service
docker ps