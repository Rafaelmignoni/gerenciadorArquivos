FROM node:lts-alpine

RUN mkdir -p /soluti/frontend

WORKDIR /soluti/frontend

COPY package*.json yarn.* ./

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn","start"]
