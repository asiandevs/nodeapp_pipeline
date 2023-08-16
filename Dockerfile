FROM node:latest
WORKDIR /usr/src/app

# copy package.json and package-lock.json and install packages. 
# This is done outside of the application source code to take advantage of docker's caching
# the command and actions after `npm install` will be cached on future builds if you only change the code of the application

COPY package*.json ./
RUN npm install

# copy the application code
COPY . .

# expose port 8000 and start serving the app
EXPOSE 8000
CMD [ "npm", "start" ]
