"use strict";
/* ------------------------------------------------------------------ */
// -                           Blog API
/* ------------------------------------------------------------------ */

// yarn add express dotenv
require("dotenv").config();
const express = require("express");
const app = express();
const { logger } = require("./src/controllers/logEvents");
const connectDB = require("./src/configs/dbConnection");
const syncModels = require("./src/sync");
const session = require("cookie-session");
const HOST = process.env?.HOST || "cloud.mongodb.com";
const PORT = process.env?.PORT || 8000;

/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */

// logger
app.use(logger);

// Accept data, convert it to object(text excluded), assign object to req.body
// DATA RECEIVING -> body parsers(eskiden expressjs'te ilave body parser package'i ile bu islem yapiliyordu ama artik body verileri bu sekilde direkt express instance uzerinden cekilebilmektedir)
// https://expressjs.com/en/resources/middleware/body-parser.html
// ( npm install body-parser / var bodyParser = require('body-parser') / app.use(bodyParser.json())) / var jsonParser = bodyParser.json() app.post('/api/users', jsonParser, function (req, res) {…} )
// Accept JSON and convert to object
app.use(express.json());
// Accept text
app.use(express.text());
// Accept form
app.use(express.urlencoded({ extended: true }));

// (browser)http://localhost:8000/public/images/monalisa.jpg -> Cannot GET /public/images/monalisa.jpg
// ? Allow static files
// app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/static", express.static("./public"));
// path /static/* iken ./public/* ile eslestirilir.
// http://localhost:8000/static/images/monalisa.jpg -> gorsel painted

// IIFE Server
(async () => {
  // Veritabanı bağlantısını test et
  // require("./src/controllers/dbConnection");
  await connectDB();

  // sync models(model degisikliklerinin database'de manuel olarak handle edilmesi)
  await syncModels();

  // ? SessionCookies:
  // http://expressjs.com/en/resources/middleware/cookie-session.html
  // https://expressjs.com/en/5x/api.html#res.cookie -> alternatif
  // https://www.npmjs.com/package/cookie-session
  //* yarn add cookie-session
  // cookieSession(options)
  // options.secret -> A string which will be used as single key if keys is not provided.
  // options.maxAge -> a number representing the milliseconds from Date.now() for expiry. 3 gun icin 1000(sn) * 60(dk) * 60(s) * 24(g) * 3
  app.use(
    session({
      secret: process.env.SECRET_KEY, // Sifreleme anahtari
      // maxAge: 1000 * 60 * 60 * 24 * 3 // milliseconds // 3 days
      // Burasi global cookie ayarlaridir, maxAge burada tanimlanirsa session olarak calismaz ve degiskenlik gostermez. controller'larda ayri ayri yapmak daha fazla esneklik saglar.
    })
  );

  // ? Custom Middlewares
  // Check whether logged in user's session/cookie data is up-to-date
  app.use(require("./src/middlewares/userCheck"));

  // Filter, Search, Sort, Pagination middleware
  app.use(require("./src/middlewares/findSearchSortPage"));

  // root routes -> Added functionality control of userCheck middleware
  app.use("/", require("./src/routes"));
  // index.js dosyalari path'te belirtilmese de otomatik olarak calisir.

  // blog routes
  app.use("/blog", require("./src/routes/blogRoute"));
  // index.js dosyalari path'te belirtilmese de otomatik olarak calisir.

  // user routes
  app.use("/user", require("./src/routes/userRoute"));

  // not found catcher
  app.all("*", (req, res) => {
    res.status(404).send(`${req.method} ${req.path} not found`);
  });

  // error handler middleware via imported controller
  app.use(require("./src/middlewares/errorHandler"));

  // request listener
  app.listen(PORT, () => {
    console.log(`Server running on https://${HOST}`);
  });
})();
