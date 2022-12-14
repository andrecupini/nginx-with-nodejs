FROM nginx:latest

RUN apt-get update && \
    apt-get install vim -y

COPY html /usr/share/nginx/html
COPY .bashrc /root/

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]