#specify a baseimage
FROM node:18.18.0-alpine
#set the working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
#install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
#add app
COPY . .
#start app
CMD ["npm", "start"]