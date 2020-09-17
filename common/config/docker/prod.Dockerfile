FROM nginx:1.18.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
COPY ./.env-example ./.env

RUN apt install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN npm i -fg yarn

RUN yarn install
RUN yarn build

RUN cp -r build /usr/share/nginx

RUN rm -f /etc/nginx/conf.d/default.conf
RUN cp config/nginx/nginx.conf /etc/nginx/conf.d/dev.conf

CMD ["nginx", "-g", "daemon off;"]
