# base image of node version 19
FROM node:19

# create a folder in the container and move to that folder
RUN mkdir -p /home/ubuntu/webapp
WORKDIR /home/ubuntu/webapp

# create a react project (name: frontend) using vite and move to the project folder
RUN npm create vite -y frontend -- --template react
WORKDIR /home/ubuntu/webapp/frontend

# copy package.json file from host machine to container; install the packages in the container
COPY ./frontend/package.json .
RUN npm install

# copy everything from the host to container
COPY ./frontend .

# container listens on port 2019
EXPOSE 2019

# run the server
CMD ["npm", "run", "dev"]
