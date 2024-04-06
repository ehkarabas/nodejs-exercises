<div align=center>
	<h1>Rent A Car API</h1>
</div>

<div align="center">
	<a href="https://rentacar-api-ehkarabas.onrender.com/">
		<img src="https://img.shields.io/badge/api-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/unequaled-bold-radium">
		<img src="https://img.shields.io/badge/api%20code-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/48qrl88.png)](https://youtu.be/Gtw36jk-zi8)

## Description

A comprehensive Rent A Car API letting users make reservations as similar to real-life rent-a-car reservations. Powered with Classic Token & JWT & Cookie Auth and documented via Swagger & Redoc & JSON. Authentication & authorization handled with classic token & jwt & cookie, pagination & sort & filter & search queries applicable. Deletion is handled via soft delete(as in paranoid tables in Sequelize). Static file access is compatible with soft deletion. Customized swagger, redoc, json documentation. Logging errors via Nodejs file system and requests via morgan 3rd party express middleware.

## Goals

Practicing on NodeJS, ExpressJS, MongoDB, MongooseJS, express middlewares & routing, custom middlewares(for error handling, id validation, filtering&sorting&pagination, combined authentication, authorization, file upload), modular route-controller-model structure, MongoDB configuration & connection to cloud, mongooseJS schema & model API, validating mongodb id's on dynamic routes via custom middleware, pagination and query features via mongodb cursor skip limit and find query, uploading files via multer in compatible with specified rules, classic token & jwt & cookie authentication at the same time via combined authentication system, handling this scope on model level via using save on update controller, handling field value reassignments via model pre save, custom helper functions to handle various useful things to improve readability as much as possible, project-wide local date-times on all date fields(timestamps included), field indexing to provide optimization on queries for future database scale, logging errors via nodejs file system and requests via morgan on daily local files, swagger-redoc-json documentation with customization via swagger-autogen and its tags on controllers, cors, cookie settings for browsers, switchable project infrastructure via an env variable.

## Technologies

- NodeJS
- ExpressJS
- MongoDB
- MongooseJS
- JWT
- Cookies
- Multer(File uploading)
- Swagger
- Redoc
- Morgan

## Controller Instructions

In the reservation list:

- If not admin or staff, only the reservations of the logged-in user are listed.

In reservation creation:

- If not admin or staff, or if userId is not present in the body, reservations can only be created for the logged-in user.
- If the user already has a reservation for those dates, an error is returned.

In reservation reading:

- If not admin or staff, only the first reservation of the logged-in user is listed.

In reservation updating:

- If not admin, the userId associated with the reservation cannot be changed.
- If the entered endDate or startDate is invalid, an error is returned.
- If the reservation cannot be found, an error is returned.
- If carId is present in the body and isAvailable is false, an error is returned.
- If carId is present and the car is not available for those dates, an error is returned.

In the car list:

- If startDate and endDate queries are not present, an error is returned.
- If startDate and endDate are not valid dates, an error is returned.
- If startDate or endDate is earlier than the current time, an error is returned.
- If startDate is later than endDate, an error is returned.

In car creation:

- createdId and updatedId are overridden with the logged-in user.

In car updating:

- updatedId is overridden with the logged-in user.

In user creation:

- If not admin, isStaff and isAdmin are overridden to false
- isActive is deleted

In user reading:

- If not admin or staff, they can only view themselves.

In user updating:

- isAdmin is always deleted
- If not admin, isStaff and isActive are deleted
- If not admin or staff, they can only update themselves.

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
rentacar_api(folder)
|
├── LICENSE
├── README.md
├── erdRentACarAPI.png
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
│   │   ├── car.js
│   │   ├── reservation.js
│   │   ├── token.js
│   │   └── user.js
│   ├── errors
│   │   └── customError.js
│   ├── helpers
│   │   ├── dateValidator.js
│   │   ├── emailFieldValidator.js
│   │   ├── imageDeleter.js
│   │   ├── imageUploader.js
│   │   ├── logFolderCreate.js
│   │   ├── modelDateTimeOffset.js
│   │   ├── passwordEncrypt.js
│   │   ├── projectNameGenerator.js
│   │   ├── refreshAccessToken.js
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
│   │   ├── staticFileSoftDeleteChecker.js
│   │   ├── tokenAuthentication.js
│   │   └── upload.js
│   ├── models
│   │   ├── car.js
│   │   ├── reservation.js
│   │   ├── token.js
│   │   └── user.js
│   └── routes
│       ├── auth.js
│       ├── car.js
│       ├── document.js
│       ├── index.js
│       ├── reservation.js
│       ├── token.js
│       └── user.js
├── uploads
│   └── default_car_image.png
└── vercel.json
```
