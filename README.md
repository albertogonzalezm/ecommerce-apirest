<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <div align="center">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
    <img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white">
  </div>

# API de Comercio Electrónico con Microservicios

## Descripción del Proyecto

Estoy desarrollando una API para un sistema de comercio electrónico utilizando una arquitectura de microservicios. Este enfoque permite dividir la funcionalidad en servicios más pequeños e independientes que pueden ser desarrollados, desplegados y escalados de forma independiente.

## Aspectos Clave

### Diseño de la API

Estoy trabajando en la definición de los puntos finales de la API, los métodos HTTP que se utilizarán y los datos que se enviarán y recibirán. También estoy considerando cómo manejar la paginación y la clasificación de los resultados.

### Autenticación y Seguridad

Estoy asegurándome de que sólo los usuarios autorizados puedan acceder a ciertas partes de la API. Esto implica el uso de tokens de autenticación, JWT.

### Manejo de Errores

Estoy diseñando la API para manejar errores de manera elegante, devolviendo códigos de estado HTTP apropiados y mensajes útiles cuando las cosas no salen según lo planeado.

### Rendimiento y Escalabilidad

Estoy trabajando para que la API pueda manejar un gran número de solicitudes simultáneas sin afectar negativamente el rendimiento. Esto implica técnicas como el almacenamiento en caché, la limitación de la tasa, y la optimización de las consultas a la base de datos.

### Documentación

Estoy creando una documentación detallada para ayudar a otros desarrolladores a entender cómo utilizar la API. Esto incluirá ejemplos de solicitudes y respuestas, detalles sobre los puntos finales y métodos disponibles, y cualquier otra información relevante.

### Pruebas

Estoy realizando pruebas exhaustivas para asegurar que la API funciona como se espera. Esto incluye pruebas unitarias, pruebas de integración y pruebas de carga.

## Requerimientos especificos

- Autenticación y autorización: Los usuarios deben poder crear cuentas y logearse para realizar compras. Los vendedores también deben poder crear cuentas y logearse para administrar sus productos y pedidos.
- Productos: Los productos deben poder ser agregados, editados y eliminados por los vendedores. Los usuarios deben poder buscar, filtrar y ordenar los productos.
- Carrito de compras: Los usuarios deben poder agregar productos al carrito de compras y realizar el pago.
- Pedidos: Los pedidos deben poder ser rastreados por los usuarios y los vendedores.
- Pagos: Los usuarios deben poder pagar sus pedidos con una tarjeta de crédito o débito.

## Instalacion

```bash
$ npm install
```

## Ejecutar la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Pruebas

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
