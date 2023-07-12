FROM node:slim as build
WORKDIR /app
COPY frontend ./
RUN npm ci --omit=dev

COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY frontend/.docker/nginx /etc/nginx/conf.d
COPY --from=build /app/pub /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]