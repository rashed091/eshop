FROM node:18.9-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn

EXPOSE 3690

CMD ["yarn", "serve"]
