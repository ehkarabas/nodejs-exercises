<div align=center>
	<h1>Personnel API</h1>
</div>

<div align="center">
	<a href="https://personnel-api-ehkarabas.onrender.com/">
		<img src="https://img.shields.io/badge/api-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/honored-harmonious-archeology">
		<img src="https://img.shields.io/badge/api%20code-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/br88xs6.png)](https://youtu.be/ELYc1HBfI8o)

## Description

A personnel API built with with Express & MongoDB & Mongoose. Authentication & authorization handled with classic token, pagination & sort & filter & search queries applicable. Customized swagger, redoc, json documentation. Logging errors via Nodejs file system and requests via morgan 3rd party express middleware.

## Goals

Practicing on NodeJS, ExpressJS, MongoDB, MongooseJS, express middlewares & routing, custom middlewares(for error handling, id validation, filtering&sorting&pagination and authentication), modular route-controller-model structure, MongoDB configuration & connection to cloud, mongooseJS schema & model API, validating mongodb id's on dynamic routes via custom middleware, pagination and query features via mongodb cursor skip limit and find query, classic token authentication via token model and request authorization header, handling custom validation errors and field value reassignments via model pre save, field indexing to provide optimization on queries for future database scale, logging errors via nodejs file system and requests via morgan on daily local files, swagger-redoc-json documentation with customization via swagger-autogen and its tags on controllers, cors.

## Technologies

- NodeJS
- ExpressJS
- MongoDB
- MongooseJS
- Swagger
- Redoc
- Morgan

## Installation

To run this app on your local, run commands below on the terminal:

1. Clone the repo on your local.

   ```bash
   git clone https://github.com/ehkarabas/nodejs-exercises.git
   ```

2. Install node modules to this sub-repo..

   ```bash
   yarn install
   ```

   or

   ```bash
   npm install
   ```

3. Run the app on your browser.

   ```bash
   yarn dev
   ```

   or

   ```bash
   npm run dev
   ```

## Resource Structure

```
personnel-api(folder)
|
├── README.md
├── index.js
├── package.json
├── public
│   └── images
│       └── monalisa.jpg
├── src
│   ├── configs
│   │   └── dbConnection.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── departmentController.js
│   │   ├── personnelController.js
│   │   └── tokenController.js
│   ├── errors
│   │   └── customError.js
│   ├── helpers
│   │   ├── corsOptions.js
│   │   ├── createUpdateErrorHandler.js
│   │   ├── logFolderCreate.js
│   │   ├── passwordEncrypt.js
│   │   └── sync.js
│   ├── middlewares
│   │   ├── authentication.js
│   │   ├── errorHandler.js
│   │   ├── findSearchSortPage.js
│   │   ├── fsLogging.js
│   │   ├── idValidation.js
│   │   ├── morganLogging.js
│   │   ├── permissions.js
│   │   └── userCheck.js
│   ├── models
│   │   ├── departmentModel.js
│   │   ├── personnelModel.js
│   │   └── tokenModel.js
│   └── routes
│       ├── authRoute.js
│       ├── departmentRoute.js
│       ├── index.js
│       ├── personnelRoute.js
│       └── tokenRoute.js
├── swagger.json
└── swaggerAutogen.js
```
