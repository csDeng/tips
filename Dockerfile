FROM node

WORKDIR /hello
RUN npm build

FROM nginx
COPY ./docs/.vuepress/dist/ /usr/share/nginx/html/
EXPOSE 80





