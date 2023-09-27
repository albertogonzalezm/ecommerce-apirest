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

## Description

Aplicación de comercio electronico: Esta es una aplicación avanzada que permite a los usuarios comprar y vender productos.

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
