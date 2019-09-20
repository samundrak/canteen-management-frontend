FROM node:10-slim
LABEL author="samundrak"
WORKDIR /app
COPY package.json /app
RUN npm install
ADD . /app
CMD [ "npm","start"]
