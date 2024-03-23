"use strict";

require("express-async-errors");

const { User } = require("../models/userModel");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  // ? get all
  list: async (req, res) => {
    //* - FILTERING & SEARCHING & SORTING & PAGINATION *//
    // ! middleware ile response'a eklenen getModelList async function'ina model girilerek filter, search, sort, pagination yaptirilabilir dilenen controller method'unda.
    const data = await res.getModelList(User);

    // ! pagination detail'leri icin middleware'e eklenmis ekstra async function ile pagination detail'leri response ile donulebilir, bu frontend pagination oldukca elverislidir, ekstra hic bir package/logic kullanmaya gerek kalmaz.
    res.status(200).json({
      error: false,
      details: await res.getModelListDetails(User),
      result: data,
    });
  },
  // ? get single
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).json({
      error: false,
      result: data,
    });
  },
  // ? create
  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).json({
      error: false,
      result: data,
    });
  },
  // ? update
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);

    // 202 -> accecpted
    res.status(202).json({
      error: false,
      message: "Updated",
      body: req.body, // gonderilen veriyi goster
      result: data,
      new: await User.findOne({ _id: req.params.userId }), // guncellenmis veriyi goster
    });
  },
  // ? delete
  destroy: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });

    // res.sendStatus(data.deletedCount ? 204 : 404);
    // 204 ile response body yollamaz, o yüzden status 200 yollayip neyin silindigi de kullaniciya gösterilebilir.
    if (data.deletedCount !== 0) {
      // res.sendStatus(204);
      res.status(200).json({
        error: false,
        result: data,
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Document Not Found");
    }
  },
  // ? login
  login: async (req, res) => {
    // env'deki SECRET_KEY degisirse tum girisler iptal olmus olur, acil durumlar icin kullanilabilir ancak bu projenin cope gitmesine de neden olabilir bu nedenle env'de degisiklik ayni proje olceginde genellikle yapilmamalidir.
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });
      if (user && user.password === passwordEncrypt(password)) {
        console.log("🔭 ~ login: ~ req.session ➡ ➡ ", req.session);
        // SESSION -> client(browser/postman vs.) kapatilip acilinca silinir
        // req.session = {
        //   // email: user.email,
        //   id: user._id,
        //   password: user.password,
        // };
        // req.session.email = user.email;
        req.session.id = user._id;
        req.session.password = user.password;
        console.log("🔭 ~ login: ~ req.session ➡ ➡ ", req.session);

        // COOKIES -> life-time(cookie-session.options.maxAge) bitene kadar silinmez
        if (req.body?.remindMe) {
          req.session.remindMe = req.body.remindMe;
          // SET maxAge:
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 days
        }

        res.status(200).json({
          error: false,
          message: "Login OK",
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password required.");
    }
  },
  // ? logout
  logout: async (req, res) => {
    // SESSION-COOKIE DESTROY
    req.session = null;
    res.status(200).json({
      error: false,
      message: "Logout OK",
    });
  },
};
