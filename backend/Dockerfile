FROM node:slim as build
WORKDIR /app
COPY backend ./
RUN npm ci --omit=dev
RUN npm run build

FROM node:slim

WORKDIR /usr/src/app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./

CMD ["npm", "start"]