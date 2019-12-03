FROM node:9-slim
RUN mkdir /src
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["nmp","start"]