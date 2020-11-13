# Stage 0. Build
FROM node:12.14.1-alpine as build

WORKDIR /src
COPY . /src/

RUN npm install && npm run build

# Stage 1. Serve
FROM nginx:1.17.7-alpine

# Remove all default files.
RUN rm -rf /usr/share/nginx/html/*

# Copy over build files to nginx default directory.
COPY --from=build /src/build/ /usr/share/nginx/html

# Configure nginx.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80