

# FrontEnd-ChallengeTotal

Bienvenido al repositorio de FrontEnd-ChallengeTotal, la aplicación frontend de WebApi-ChallengeTota desarrollada en React. Esta aplicación le permitirá interactuar con la API RESTful de WebApi-ChallengeTotal a través de una interfaz de usuario amigable.

## Requisitos previos

Antes de comenzar, asegúrese de tener instalado lo siguiente en su máquina:

1. [Node.js](https://nodejs.org/) (versión 12 o superior)
2. [Yarn](https://yarnpkg.com/) o [npm](https://www.npmjs.com/) (gestor de paquetes)

## Pasos para levantar la aplicación

1. **Clonar el repositorio**

   Abra una terminal y ejecute el siguiente comando para clonar el repositorio de FrontEnd-ChallengeTotal:

git clone https://github.com/GuidoLn/FrontEnd-ChallengeTotal.git

markdown


2. **Configurar el archivo .env**

Navegue hasta el directorio del proyecto clonado y cree un archivo llamado `.env` en la raíz del proyecto. A continuación, configure la variable de entorno `REACT_APP_API_URL` con la URL de la API de WebApi-ChallengeTota:

REACT_APP_API_URL=https://localhost:5001/

less


Asegúrese de reemplazar `https://localhost:5001/` con la URL de su instancia de WebApi-ChallengeTotal si es diferente.

3. **Instalar las dependencias**

Vuelva a la terminal y navegue hasta el directorio del proyecto clonado. Ejecute el siguiente comando para instalar las dependencias del proyecto:

cd FrontEnd-ChallengeTotal
yarn install

Si prefiere utilizar npm, ejecute:

npm install

4. **Ejecutar la aplicación**

Ejecute el siguiente comando para iniciar la aplicación en modo de desarrollo:

yarn start

Si prefiere utilizar npm, ejecute:

npm start

Una vez que la aplicación esté en ejecución, puede acceder a ella a través de la dirección `http://localhost:3000/` en su navegador web.

¡Felicitaciones! Ahora tiene la aplicación FrontEnd-ChallengeTotal en ejecución y está listo para interactuar con la API RESTful de WebApi-ChallengeTotal a través de una interfaz de usuario amigable.

