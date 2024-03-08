<div align=center>
	<h1>Library Sequelize Express</h1>
</div>

<div align="center">
	<a href="https://transparent-peaceful-visage.glitch.me/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<a href="https://glitch.com/edit/#!/transparent-peaceful-visage/">
		<img src="https://img.shields.io/badge/remix-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
	<img src="./presentation/library-sequelize-presentation.gif"/>
</div>

<hr>

## Description

A simple library API built with sequelize on sqlite engine. Custom validations and descriptive errors have been defined on fields.

## Goals

Practicing on NodeJS, ExpressJS, Sequelize.

## Technologies

- NodeJS
- ExpressJS
- Sequelize

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
library_sequelize(folder)
|
├── README.md
├── app
│   ├── controllers
│   │   ├── bookController.js
│   │   ├── errorHandler.js
│   │   └── logEvents.js
│   ├── models
│   │   └── bookModel.js
│   └── routes
│       └── bookRoute.js
├── app.js
├── db.sqlite3
├── package.json
└── presentation
    └── library-sequelize-presentation.gif
```
