"use strict";

const router = require("express").Router();

const User = require("../controllers/userController");
const idValidation = require("../middlewares/idValidation");

// - :userId ile karismamasi icin one yazilmalidir ki login veya logout gelirse User.login/logout calissin
router.post("/login", User.login);
router.all("/logout", User.logout); // logout'ta suanda bir veri gonderimine ihtiyac olmadigi icin get makuldur veya all olarak tanimlanabilir. Sonraki asamlarda logout icin de token gerekli olacagi icin post da yapilabilir. get -> guvenligi onemsiz olan islemler

// User:
router
  .route("/")
  // ? get all
  .get(User.list)
  // ? create
  .post(User.create);

router
  .route("/:userId(\\w+)")
  .all(idValidation)
  // ? get single
  .get(User.read)
  // ? update
  .put(User.update)
  .patch(User.update)
  // ? delete
  .delete(User.destroy);

module.exports = router;
