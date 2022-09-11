FROM node

COPY . /opt/cart
WORKDIR /opt/cart

RUN apt-get update && apt-get install -y \
  git \
  nano \
  && npm i yarn \
  && yarn install

CMD ["yarn", "dev"]
