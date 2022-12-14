FROM nginx:latest

RUN apt-get update && \
    apt-get install vim -y

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/
COPY .bashrc /root/

RUN mkdir /var/www -p && touch /var/www/index.html

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]