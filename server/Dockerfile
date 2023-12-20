FROM node:21.2.0-bullseye-slim

RUN apt-get update -y && apt-get install -y
RUN apt-get update -y && apt-get install -y openssl

RUN yarn set version 4.0.2

WORKDIR /usr/src/app

COPY package.json ./package.json

COPY .env ./env

COPY tsconfig.json ./tsconfig.json

COPY prisma ./prisma

COPY . .

RUN yarn install

#RUN yarn build

RUN yarn prisma generate

EXPOSE 5174



