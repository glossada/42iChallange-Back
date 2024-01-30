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
ingresar al siguiente link**:** 

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

**Portfolio: <https://portfolio-chi-eosin-34.vercel.app/>**
