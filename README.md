# NodeJS-Basic-Vanilla-Server


## to refactor
# NodeJS in Docker
## Building your image
* inside the directory where you have the `Dockerfile` and run:
    - `$ docker build -t <your username>/node-web-app`
## Run the image
* `docker run -p 49160:8080 -d <your username>/node-web-app`
    - `-d` flag runs the container in detached mode
    - `-p` redirects a public port to a private port
* if you need to go insie the container use the `exec`command
    - `docker exec -it <container id> /bin/bash`
## Test
* `docker ps`
* `curl -i localhost:49160`