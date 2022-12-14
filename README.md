# nginx-with-nodejs

> How to create database table in the first run:
Enter in nodejs container with the command:
```sh
# docker exec -it app bash
```
Then execute migration to create the people table:
```sh
# npx prisma migrate deploy
```