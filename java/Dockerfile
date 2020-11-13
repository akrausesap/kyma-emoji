# Stage 0: Download files with Composer.
FROM maven:3-openjdk-11 as builder

WORKDIR /builder
COPY src/ /builder/src
COPY emojis.json /builder/
COPY pom.xml /builder/

RUN mvn clean package


# Stage 1: Run application with Apache.
FROM openjdk:11-jre-slim

COPY ./emojis.json ./emojis.json
COPY --from=builder /builder/target/emoji-api-0.0.1-SNAPSHOT.jar /emoji-api.jar

ENTRYPOINT [ "java", "-jar", "./emoji-api.jar"]

