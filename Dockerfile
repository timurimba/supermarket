FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY dist/ .

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]