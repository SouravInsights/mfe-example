FROM node:14.4.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
COPY ./.env-example ./.env

RUN npm i -fg yarn
RUN yarn install
