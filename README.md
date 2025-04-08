<<<<<<< HEAD
# TpExpress
=======
# Aplicación Node Express con React

Este proyecto combina un servidor Express con una aplicación React básica, configurada para ejecutarse en el puerto 3000.

## Comenzando

Sigue estas instrucciones para configurar y ejecutar el proyecto.

### Requisitos Previos

Asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/) 
- npm (incluido con Node.js)

### Instalación

1. Clona el repositorio o descarga los archivos del proyecto.

2. Navega al directorio del proyecto:

   ```bash
   cd TpExpress
   ```

3. Instala las dependencias del servidor Express:

   ```bash
   cd servidor
   npm install
   ```

4. Instala las dependencias de la aplicación React:

   ```bash
   cd ../dist
   npm install
   ```

5. Compila la aplicación React para producción:

   ```bash
   npm run build
   ```

   Esto generará una carpeta `dist` que será servida por el servidor Express.

### Ejecutar el Proyecto

1. Navega al directorio del servidor:

   ```bash
   cd ../servidor
   ```

2. Inicia el servidor Express:

   ```bash
   node server.js
   ```

3. Abre tu navegador y accede a la URL:

   ```
   http://localhost:3000
   ```

   Deberías ver la aplicación React funcionando.

### Detener el Servidor

Para detener el servidor, presiona `Ctrl + C` en la terminal donde está ejecutándose.

### Notas Adicionales

- Si realizas cambios en la aplicación React, recuerda ejecutar nuevamente `npm run build` en el directorio `dist` para actualizar la carpeta de producción.
- Asegúrate de que el servidor Express esté configurado correctamente para servir la carpeta `dist`.
>>>>>>> e6af414 (.)
