FROM node:14

WORKDIR /parcelsTask
COPY package.json .
RUN npm install
COPY . .
CMD npm start