#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  STOP ALL 🐳  Docker and clean containers"
docker compose --env-file ../../config.env \
  --file ../../docker/nodejs_service.dev.docker-compose.yaml --volumes --rmi all
docker container prune -f
docker volume prune -f
docker image prune -af
