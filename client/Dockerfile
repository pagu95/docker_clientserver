FROM ubuntu

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

RUN npm install ws 

COPY . .

#EXPOSE 8000

CMD ["npm","start"]

