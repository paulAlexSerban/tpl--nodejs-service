# NodeJS Services Template

## Some Useful Development Commands
- `bash modulize.bash -e dev -p compose-start` - Start the development environment with docker-compose

@TODO - implement deploy to AWS ECR on push to master
Some ideas:
- make sure you have or create a AWS VPC
- install AWS CLS and configure it with your AWS credentials
- add the required data in `.env.dev`
- if you have previously deployed to AWS ECR - re-tag the image
  - run `bash scripts/ecr-nodejs_service-remove-latest-tag.bash`
- deploy your current/latest image to AWS ECR
  - RUN `bash scripts/ecr-nodejs_service-deploy.bash` to deploy your current image