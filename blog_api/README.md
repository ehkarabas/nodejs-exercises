<div align=center>
	<h1>Blog API</h1>
</div>

<div align="center">
	<a href="https://blog-api-ehkarabas.onrender.com/">
		<img src="https://img.shields.io/badge/api-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/guiltless-worried-monday">
		<img src="https://img.shields.io/badge/api%20code-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
  <img src="./presentation/blog-api-presentation.gif"/>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/athjzy7.png)](https://youtu.be/OrLgd6ewqeM)

## Description

A simple blog API built with with Express & MongoDB & Mongoose. Authentication handled with session/persistent cookies.

## Goals

Practicing on NodeJS, ExpressJS, MongoDB, MongooseJS, express middlewares & routing, custom middlewares(for error handling, id validation, filtering&sorting&pagination and authentication), modular route-controller-model structure, MongoDB configuration & connection to cloud, mongooseJS schema & model API, validating mongodb id's on dynamic routes via custom middleware, pagination and query features via mongodb cursor skip limit and find query, cookie authentication via cookie-session package, handling custom validation errors and field value reassignments via model pre save, cors.

## Technologies

- NodeJS
- ExpressJS
- MongoDB
- MongooseJS

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
blog-api(folder)
|
├── README.md
├── index.js
├── package.json
├── presentation
│   └── blog-api-presentation.gif
├── public
│   └── images
│       └── monalisa.jpg
└── src
    ├── configs
    │   └── dbConnection.js
    ├── controllers
    │   ├── blogController.js
    │   ├── logEvents.js
    │   └── userController.js
    ├── errors
    │   └── customError.js
    ├── helpers
    │   └── passwordEncrypt.js
    ├── middlewares
    │   ├── errorHandler.js
    │   ├── findSearchSortPage.js
    │   ├── idValidation.js
    │   └── userCheck.js
    ├── models
    │   ├── blogModel.js
    │   └── userModel.js
    ├── routes
    │   ├── blogRoute.js
    │   ├── index.js
    │   └── userRoute.js
    └── sync.js
```
