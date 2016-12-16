FROM nginx
COPY ./docs/ /usr/share/nginx/html/
COPY ./site.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
