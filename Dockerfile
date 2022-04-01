FROM node

WORKDIR /hello

COPY package*.json ./
COPY . .
COPY ./server.js /app/server.js
RUN npm install

EXPOSE 8080
CMD [ "npm","run","dev" ]





