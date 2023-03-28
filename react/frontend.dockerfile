# base image of node version 19
FROM node:19

# container listens on port 2019
EXPOSE 2019

# create a folder in the container and move to that folder
RUN mkdir -p /home/ubuntu/webapp
WORKDIR /home/ubuntu/webapp

# copy package.json file from host machine to container
ADD ./frontend/package.json .

# install the packages in the container
RUN npm install
RUN ls -laF

# copy everything from the host to container
ADD ./frontend .

# run the server
CMD ["npm", "run", "dev"]
