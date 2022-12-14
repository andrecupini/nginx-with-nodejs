FROM node:latest

WORKDIR /usr/src/app

COPY . .

ENV DATABASE_URL=mysql://root:root@db:3306/nodedb

#RUN apt-get update && apt-get install -y wget
RUN npm install

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000
