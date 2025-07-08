# Usar imagen oficial de Node.js como base
FROM node:18
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install
# Copiar el resto del código
COPY . .
# Exponer puerto
EXPOSE 3000
# Comando para arrancar la app
CMD ["node", "index.js"]