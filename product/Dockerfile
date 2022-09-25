FROM node

COPY ./ /opt/product
WORKDIR /opt/product

RUN apt-get update && apt-get install -y \
  git \
  nano \
  && npm i yarn \
  && yarn install \
  && yarn tsc

CMD ["node", "dist/app.js"]