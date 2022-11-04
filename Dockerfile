FROM node:14.19.3-alpine

WORKDIR /var/www

COPY . /var/www

CMD ["npm", "start"]
