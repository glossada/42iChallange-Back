# 42iChallange-Back
**Descripción General**

Proporciona datos o servicios necesarios para la funcionalidad de la página y test unitarios para las funciones principales del desafío. Solo cuenta con 2 endpoints **/pairwithSum** y **/nonconstructiblechange** que reciben los parámetros del frontend y devuelven el resultado.

**Estructura del Proyecto**

Contiene todos los archivos relacionados con el backend construido en NodeJS con Express.

Encontramos el archivo que crea el servidor index.js y el archivo de configuración de los test jest.config.js. luego dentro de la carpeta src encontramos la configuración del servidor en app.js, también encontramos los router con la configuración de los 2 únicos endpoints asi como los handlers y controllers de cada endpoint.
**los ejercicios del challenge se encuentran resueltos en src\controller\findPairWithSumController o nonConstructibleChangeController.**

**Los test se encuentran en la carpeta \_\_tests\_\_:**

- **findPairWithSum.test.js**
- **nonConstructibleChange.test.js**

**Utilización Online**
ingresar al siguiente link**: <https://42i-challange-front.vercel.app/>**

**Configuración del Entorno (Local)**

1. **Backend.**
1. Asegúrate de tener Node.js instalado.
1. Navega a la carpeta **42iChallange-Back** y ejecuta **npm install** en el terminal para instalar las dependencias.
1. Ejecuta **npm start** para iniciar el servidor del backend.
1. Para ejecutar los test utilizar el comando **npm test**

**Endpoints**

**/pairwithSum** recibe por query un arreglo de enteros y un entero que es el Target Sum. El endopoint devuelve el resultado del algoritmo que se ejecuta en el backend, un arreglo que contiene los 2 números que al sumarlos da el Target Sum, y si no le encuentra devuelve un arreglo vacío.

**/nonconstructiblechange** recibe por query un arreglo de enteros. El endopoint devuelve el resultado del algoritmo que se ejecuta en el backend, un entero que es el menor cambio que no se puede formar con las monedas del arreglo proporcionado.



**Dependencias**

**"axios": "^1.6.7",**

`    `**"body-parser": "^1.20.2",**

`    `**"cookie-parser": "^1.4.6",**

`    `**"cors": "^2.8.5",**

`    `**"dotenv": "^16.4.1",**

`    `**"express": "^4.18.2",**

`    `**"morgan": "^1.10.0",**

`    `**"nodemon": "^3.0.3",**

`    `**"pg": "^8.11.3",**

`    `**"sequelize": "^6.35.2"**

**Contacto**

**Autor: Gabriel Lossada
Mail: [gabriellossada@gmail.com**](mailto:gabriellossada@gmail.com)**

**LinkedIn: [https://www.linkedin.com/in/glossada/**](https://www.linkedin.com/in/glossada/)**

**GitHub: [https://github.com/glossada/**](https://github.com/glossada/)**

**Portfolio: <https://portfolio-chi-eosin-34.vercel.app/>

ENGLISH**


**General Description**

` `It provides data or services necessary for the page's functionality and unit tests for the main challenge functions. It only has 2 endpoints, **/pairwithSum** and **/nonconstructiblechange**, which receive parameters from the frontend and return the result.

**Project Structure**

` `It contains all files related to the backend built in NodeJS with Express. The file creating the server (index.js) and the test configuration file (jest.config.js) are found. Inside the src folder, server configuration in app.js is present, along with routers containing the configuration for the 2 unique endpoints, as well as handlers and controllers for each endpoint. 

**The challenge exercises are solved in src\controller\findPairWithSumController or nonConstructibleChangeController.**

` `**Tests are located in the tests folder:**

- **findPairWithSum.test.js**
- **nonConstructibleChange.test.js**

**Online Usage** 

Access the following link: **<https://42i-challange-front.vercel.app/>**

**Local Environment Setup** 

1- Backend.

1. Ensure Node.js is installed.
1. Navigate to the **42iChallenge-Back** folder and run **npm install** in the terminal to install dependencies.
1. Run **npm start** to initiate the backend server.
1. To execute tests, use the **npm test** command.

**Endpoints**

- **/pairwithSum** receives an array of integers and an integer (Target Sum) through a query. The endpoint returns the result of the algorithm executed in the backend, an array containing the 2 numbers whose sum equals the Target Sum, and an empty array if no match is found.
- **/nonconstructiblechange** receives an array of integers through a query. The endpoint returns the result of the algorithm executed in the backend, an integer representing the smallest change that cannot be formed with the coins from the provided array.

**Dependencies**

`    `**"axios": "^1.6.7",**

`    `**"body-parser": "^1.20.2",**

`    `**"cookie-parser": "^1.4.6",**

`    `**"cors": "^2.8.5",**

`    `**"dotenv": "^16.4.1",**

`    `**"express": "^4.18.2",**

`    `**"morgan": "^1.10.0",**

`    `**"nodemon": "^3.0.3",**

`    `**"pg": "^8.11.3",**

`    `**"sequelize": "^6.35.2"**

**Contact**

**Author: Gabriel Lossada
Mail: [gabriellossada@gmail.com**](mailto:gabriellossada@gmail.com)**

**LinkedIn: [https://www.linkedin.com/in/glossada/**](https://www.linkedin.com/in/glossada/)**

**GitHub: [https://github.com/glossada/**](https://github.com/glossada/)**

**Portfolio: [https://portfolio-chi-eosin-34.vercel.app/**](https://portfolio-chi-eosin-34.vercel.app/)**
