* [Dockerfile reference](#dockerfile-reference)
   * [Layers](#layers)
   * [Basics of Important Instructions](#basics-of-important-instructions)
      * [FROM](#from)
      * [RUN](#run)
      * [WORKDIR](#workdir)
      * [COPY](#copy)
      * [ENV](#env)
      * [CMD](#cmd)
      * [ENTRYPOINT](#entrypoint)
      * [EXPOSE](#expose)
* [Docker CLI basics](#docker-cli-basics)
   * [login](#login)
   * [run](#run-1)
   * [ps](#ps)
   * [exec](#exec)
   * [commit](#commit)
   * [stop](#stop)
   * [build](#build)
   * [push](#push)
   * [pull](#pull)
* [Dockerfile patterns](#dockerfile-patterns)
   * [Builder pattern](#builder-pattern)
   * [Multi-stage](#multi-stage)

# Dockerfile reference

For more details, see [official Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

## Layers

Instructions in a Dockerfile generate reusable layers containing the set of differences from the layer before it. The last layer specifies the command to run when running the image in a container. [[ref]](https://docs.docker.com/storage/storagedriver/)

## Basics of Important Instructions

### `FROM`

Initializes a build stage using the specified image as a base for following instructions. The base image can be any other valid Docker image. [[ref]](https://docs.docker.com/engine/reference/builder/#from)

e.g. `FROM node:12.14.1-alpine as build`

### `RUN`

Executes any specified command in a new layer. [[ref]](https://docs.docker.com/engine/reference/builder/#run)

e.g. `RUN npm install && npm run build`

### `WORKDIR`

Sets the working directory for `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it. Created if it does not exist. [[ref]](https://docs.docker.com/engine/reference/builder/#workdir)

e.g. `WORKDIR /src`

### `COPY`

Used as `COPY <source> <destination>`, copies the source file/directory to `destination`. Can use paths relative to `WORKDIR`. [[ref]](https://docs.docker.com/engine/reference/builder/#copy)

e.g. `COPY ./nginx.conf /etc/nginx/conf.d/default.conf`

### `ENV`

Used as `ENV <key> <value>`, Sets the environment variable `key` to `value`. The defined environment variable is available in the container running from the image. Can be overwritten on `docker run [ARGS]`. [[ref]](https://docs.docker.com/engine/reference/builder/#env)

e.g. `ENV APACHE_DOCUMENT_ROOT /var/www/html/public`

### `CMD`

Sets the the command to be executed when running the image, or provides argument defaults to `ENTRYPOINT`. Can be overwritten in `docker run [ARGS]`. [[ref]](https://docs.docker.com/engine/reference/builder/#cmd)

e.g. `CMD npm start`, `CMD [ "index.py" ]`

### `ENTRYPOINT`

Sets executable and arguments to be executed when running the image, cannot be overwritten. [[ref]](https://docs.docker.com/engine/reference/builder/#entrypoint)

e.g. `ENTRYPOINT [ "python" ]`

### `EXPOSE`

Announces that the container will listen at the specified port at runtime (does not actually publish the port). [[ref]](https://docs.docker.com/engine/reference/builder/#expose)

e.g. `EXPOSE 80`

# Docker CLI basics

These commands will help you manage, debug, and troubleshoot images locally.

## `login`

Log in to a Docker registry. [[ref]](https://docs.docker.com/engine/reference/commandline/login/)

```
docker login --username UNAME --password PWD
```

## `run`

Run a process in a container derived from an image, with its own filesystem, networking, and process tree separate from those of the host. Can be run in foreground (default, attach the output to the console) or detached mode (`-d` option). [[ref]](https://docs.docker.com/engine/reference/run/)

```
docker run [OPTIONS] IMAGE[:TAG|@DIGEST]
```

## `ps`

List containers. [[ref]](https://docs.docker.com/engine/reference/commandline/ps/)

```
docker ps [OPTIONS]
```

## `exec`

Run a command in a running container. [[ref]](https://docs.docker.com/engine/reference/commandline/exec/)

```
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

e.g. To exec into an interactive shell session in the container:

```
docker exec CONTAINER -it sh
```

## `commit`

Create a new image from a conatiner's changes. [[ref]](https://docs.docker.com/engine/reference/commandline/commit/)

```
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
```

## `stop`

Stop a running container. [[ref]](https://docs.docker.com/engine/reference/commandline/exec/)

```
docker stop CONTAINER
```

## `build`

Build an image from a Dockerfile and store it locally. It is a good idea to meaningfully name and tag the image with the `-t` flag. [[ref]](https://docs.docker.com/engine/reference/commandline/build/)

```
docker build [OPTIONS] PATH | URL | -
```

e.g. `docker build -t andy008/conu-php:0.0.1 .`

## `push`

Push an image to a registry. [[ref]](https://docs.docker.com/engine/reference/commandline/push/)

```
docker push [OPTIONS] NAME[:TAG]
```

e.g. `docker push andy008/conu-php:0.0.1`

## `pull`

Pull an image from a registry. [[ref]](https://docs.docker.com/engine/reference/commandline/pull/)

```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

e.g. `docker pull andy008/conu-php:0.0.1`

# Dockerfile patterns

To reduce the size of built images, it is preferred to only include files, packages, and binaries required to run the application, which can be achieved with the builder pattern and more recently the multi-stage build [[ref]](https://docs.docker.com/develop/develop-images/multistage-build/)

## Builder pattern

A Docker build involving two images (which can each be defined in their own Dockerfile), one containing everything needed to build the application (the development image) and one containing only what is needed to run the application (the production/distribution image), including the application itself. See [[ref]](https://docs.docker.com/develop/develop-images/multistage-build/#before-multi-stage-builds) for example.

## Multi-stage

A multi-stage build uses multiple `FROM` statements, where each one can use a different base and begins a new build stage which can be named. To achieve a minimal final image, only required files are copied from the base image. A given stage can also use a previous stage as a base.

See [[ref]](https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds) for examples. This is considered to be a simpler and preferable option to the Builder pattern.
