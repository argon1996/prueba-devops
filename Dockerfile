FROM node:20-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install --omit=dev

COPY app/. ./

# Agrega esta línea para instalar curl
RUN apk add --no-cache curl

EXPOSE 3000

CMD ["node", "index.js"]
