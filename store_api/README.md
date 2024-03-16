<div align=center>
	<h1>Store API</h1>
</div>

<div align="center">
	<a href="https://terrific-tourmaline-manatee.glitch.me">
		<img src="https://img.shields.io/badge/api-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/terrific-tourmaline-manatee">
		<img src="https://img.shields.io/badge/api%20code-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
  <img src="./presentation/store-api-presentation.gif"/>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/8w2j9oh.png)](https://youtu.be/YlNryiaXX-g)

## Description

A simple store API built with with Express & MongoDB & Mongoose.

## Goals

Practicing on NodeJS, ExpressJS, MongoDB, MongooseJS, express middlewares & routing, custom middlewares(for error handling, id validation, filtering&sorting&pagination and authentication), modular route-controller-model structure, MongoDB configuration & connection to cloud, mongooseJS schema & model API, handling custom validation errors and field value reassignments via model pre save, cors.

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
store-api(folder)
|
├── README.md
├── index.js
├── package.json
├── presentation
│   └── store-api-presentation.gif
├── public
│   └── images
│       └── monalisa.jpg
└── src
    ├── configs
    │   └── dbConnection.js
    ├── controllers
    │   ├── logEvents.js
    │   ├── productController.js
    │   └── userController.js
    ├── errors
    │   └── customError.js
    ├── helpers
    │   └── passwordEncrypt.js
    ├── middlewares
    │   ├── auth.js
    │   ├── errorHandler.js
    │   ├── findSearchSortPage.js
    │   ├── getCors.js
    │   ├── idValidation.js
    │   ├── postCors.js
    │   └── userCheck.js
    ├── models
    │   ├── productModel.js
    │   └── userModel.js
    ├── routes
    │   ├── adminRoute.js
    │   ├── index.js
    │   ├── productRoute.js
    │   └── userRoute.js
    └── sync.js
```
