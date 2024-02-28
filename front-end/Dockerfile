FROM node:18

WORKDIR /chat_app/front-end/

COPY ./front-end/package*.json /chat_app/front-end/

COPY ./front-end/ /chat_app/front-end/

RUN chmod +x ./script.sh

CMD ["sh", "./script.sh"]