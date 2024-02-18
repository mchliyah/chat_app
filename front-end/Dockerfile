FROM node:20.10.0-alpine

WORKDIR /chat_app/front-end/

COPY ./front-end/package*.json /chat_app/front-end/
RUN npm update -g npm
RUN npm install

COPY ./front-end/ /chat_app/front-end/

CMD ["npm", "start"]