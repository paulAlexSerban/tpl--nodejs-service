#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "🧪 TEST DOCKER 🐳 ${FORMTED_PROJECT_NAME}"
bash ../../../docker/test/check-docker-container.bash nodejs_service
docker ps
