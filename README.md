# API de Comercio Electrónico con Microservicios

## Tecnologías
<div style="display:flex" align="center">
  <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node.js">
  <img src="https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white" alt="nestjs">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="typescript">
  <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white" alt="prismaorm">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white" alt="postgres">
</div>


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
