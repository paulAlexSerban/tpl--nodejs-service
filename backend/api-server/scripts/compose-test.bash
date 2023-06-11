#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "🧪  TEST 🐳 ${FORMTED_PROJECT_NAME}"
bash ../../scripts/test/check-docker-container.bash proxy
