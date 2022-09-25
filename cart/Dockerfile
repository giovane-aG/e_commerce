FROM node

COPY ./dist /opt/cart

RUN apt-get update && apt-get install -y \
  git \
  nano

WORKDIR /opt/cart

RUN npm i yarn \
  && yarn install


CMD ["node", "dist/app.js"]
