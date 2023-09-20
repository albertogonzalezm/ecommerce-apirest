# Establecer la imagen base
FROM node:16

# Crear el directorio de la aplicación en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos del paquete y el bloqueo del paquete
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install


# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

RUN npm install bcrypt

# Generar el cliente Prisma
RUN npx prisma generate

# Construir la aplicación
RUN npm run build

# Exponer el puerto que tu aplicación utiliza
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
