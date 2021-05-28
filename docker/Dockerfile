FROM node:15

WORKDIR app

COPY ./package.json .
#COPY ./package-lock.json .

RUN npm i

COPY . .

EXPOSE 2823

CMD ["npm", "run", "start"]