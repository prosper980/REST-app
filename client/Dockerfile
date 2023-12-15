FROM node:lts-buster-slim AS development
 
WORKDIR /usr/src/app

 
COPY package.json ./package.json

COPY . .

RUN yarn set version 4.0.2

RUN yarn install

RUN yarn run build

EXPOSE 4173
  
FROM development as dev-envs
RUN <<EOF
apt-get update -y
apt-get install -y --no-install-recommends git
apt autoremove -y
EOF


COPY --from=gloursdocker/docker / /
CMD [ "yarn", "run", "preview" ]