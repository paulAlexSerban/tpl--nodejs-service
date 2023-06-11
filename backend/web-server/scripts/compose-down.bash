#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo " 🛑  STOP 🐳 ${FORMTED_PROJECT_NAME}"
docker-compose --env-file ../config.env \
  --file ../docker-compose.dev.yml \
 down --volumes --rmi all
