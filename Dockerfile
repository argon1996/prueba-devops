FROM node:20-alpine                     # Usa una imagen ligera de Node.js 20 basada en Alpine Linux

WORKDIR /app                            # Establece el directorio de trabajo dentro del contenedor

COPY app/package*.json ./               # Copia los archivos de dependencias (package.json y package-lock.json)
RUN npm install --omit=dev              # Instala solo las dependencias necesarias para producción

COPY app/. ./                           # Copia el resto de los archivos de la app al contenedor

RUN apk add --no-cache curl             # 🛠 Instala curl en el contenedor (útil para pruebas desde dentro)

EXPOSE 3000                             # Expone el puerto 3000 para acceder a la app

CMD ["node", "index.js"]               # Comando que se ejecuta al iniciar el contenedor
