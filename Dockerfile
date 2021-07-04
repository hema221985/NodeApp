FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#for production use: RUN npm ci --only=production

COPY .  .

EXPOSE 8081

CMD [ "node" , "server.js" ]