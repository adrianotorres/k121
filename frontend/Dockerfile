FROM node:8

RUN mkdir -p /app
WORKDIR /app

ADD ./package.json /app/
ADD ./package-lock.json /app/

COPY . /app/

EXPOSE 9000

CMD [ "npm", "install" ]
