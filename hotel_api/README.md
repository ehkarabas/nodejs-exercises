<div align=center>
	<h1>Hotel API</h1>
</div>

<div align="center">
	<a href="https://hotel-api-ehkarabas.onrender.com/">
		<img src="https://img.shields.io/badge/api-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/jumbled-juniper-technician">
		<img src="https://img.shields.io/badge/api%20code-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/ciqztza.png)](https://youtu.be/xmJTs4R0jJs)

## Description

A comprehensive Hotel API letting users make reservations as similar to real-life hotel reservations. Powered with JWT w Blacklist & Cookie Auth and documented via Swagger & Redoc & JSON. Authentication & authorization handled with jwt(with blacklist) & cookie, pagination & sort & filter & search queries applicable. Customized swagger, redoc, json documentation. Logging errors via Nodejs file system and requests via morgan 3rd party express middleware.

## Goals

Practicing on NodeJS, ExpressJS, MongoDB, MongooseJS, express middlewares & routing, custom middlewares(for error handling, id validation, filtering&sorting&pagination, combined authentication, authorization, file upload), modular route-controller-model structure, MongoDB configuration & connection to cloud, mongooseJS schema & model API, validating mongodb id's on dynamic routes via custom middleware, pagination and query features via mongodb cursor skip limit and find query, uploading files via multer in compatible with specified rules, jwt authentication with blacklist mechanism and cookie authentication at the same time via combined authentication system, handling this scope on model level via using save on update controller, handling field value reassignments via model pre save, custom helper functions to handle various useful things to improve readability as much as possible, field indexing to provide optimization on queries for future database scale, logging errors via nodejs file system and requests via morgan on daily local files, swagger-redoc-json documentation with customization via swagger-autogen and its tags on controllers, cors, cookie settings for browsers, switchable project infrastructure via an env variable.

## Technologies

- NodeJS
- ExpressJS
- MongoDB
- MongooseJS
- JWT(w blacklist)
- Cookies
- Multer(File uploading)
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
hotel-api(folder)
|
├── README.md
├── index.js
├── package.json
├── public
│   └── images
│       └── monalisa.jpg
├── src
│   ├── configs
│   │   ├── dbConnection.js
│   │   └── swagger.json
│   ├── controllers
│   │   ├── auth.js
│   │   ├── blacklist.js
│   │   ├── reservation.js
│   │   ├── room.js
│   │   └── user.js
│   ├── errors
│   │   └── customError.js
│   ├── helpers
│   │   ├── blacklistOps.js
│   │   ├── cleanBlacklist.js
│   │   ├── cleanBlacklistScript.js
│   │   ├── fixPriceByRoom.js
│   │   ├── imageDeleter.js
│   │   ├── imageUploader.js
│   │   ├── logFolderCreate.js
│   │   ├── nightCalculator.js
│   │   ├── passwordEncrypt.js
│   │   ├── refreshAccessToken.js
│   │   ├── reservationChecker.js
│   │   ├── swaggerAutogen.js
│   │   ├── sync.js
│   │   ├── truncateErrorUploads.js
│   │   ├── uploadLogFileCreate.js
│   │   └── utcDateGenerator.js
│   ├── middlewares
│   │   ├── combinedAuthentication.js
│   │   ├── cookieAuthentication.js
│   │   ├── errorHandler.js
│   │   ├── fsLogging.js
│   │   ├── idValidation.js
│   │   ├── morganLogging.js
│   │   ├── permissions.js
│   │   ├── queryHandler.js
│   │   ├── tokenAuthentication.js
│   │   └── upload.js
│   ├── models
│   │   ├── blacklist.js
│   │   ├── reservation.js
│   │   ├── room.js
│   │   └── user.js
│   └── routes
│       ├── auth.js
│       ├── blacklist.js
│       ├── document.js
│       ├── index.js
│       ├── reservation.js
│       ├── room.js
│       └── user.js
└── uploads
    └── default_hotel_room_pic.png
```
