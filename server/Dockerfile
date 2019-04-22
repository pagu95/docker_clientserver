FROM ubuntu

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update

RUN apt-get update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

RUN npm install ws

RUN npm install express
COPY . . 

#EXPOSE 8080

CMD ["npm","start"]
