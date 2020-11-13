# Docker

## Uderstanding and basic setup

As depicted in the [Docker Overwiew](https://docs.docker.com/engine/docker-overview/), docker comes with three main components:

* Docker Client is used to interact with host and registry
* Docker Host is responsible for building images and executing containers 
* Docker Registry is reponsible for distributing images


![docker components](https://docs.docker.com/engine/images/architecture.svg)

In order to be able to publish and ditribuite your images (`docker push`) you first need to login into docker hub using the `docker login` command and your [Docker Hub Credentials](https://hub.docker.com/).

## Build and Push Docker Images

Each backend and frontend includes a dedicated `Dockerfile` that is specifying a sequence of steps required to build and package the application into a `Docker image`. To read about the Dockerfile instructions used in this workshop, see [additional resources](DOCKER.md). If you are building an alike application during the assignment, you can probably take over huge parts of the respective Dockerfiles. 

To build the docker image (which is at first stored locally), issue the following command within the directory containing your Dockerfile, substituting each value with you own:
```
docker build -t <docker user id>/<arbitrary name for your image>:<version> .
```

Once the image is built, push it to Docker Hub using the same image name and tag:
```
docker push <docker user id>/<arbitrary name for your image>:<version>
```

For example:
```
docker build -t andy008/emoji-php:0.0.1 .
docker push andy008/emoji-php:0.0.1
```