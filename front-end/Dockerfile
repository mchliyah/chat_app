FROM node:20.10.0-alpine

WORKDIR /chat_app/front-end/

COPY package*.json /chat_app/front-end/
RUN npm update -g npm
RUN npm install

COPY . /chat_app/front-end/

CMD ["npm", "start"]