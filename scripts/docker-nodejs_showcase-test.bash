#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🧪  TEST Node.js Service container"
bash ../docker/test/check-docker-container.bash nodejs_service-compose
