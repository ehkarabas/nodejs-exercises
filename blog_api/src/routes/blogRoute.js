"use strict";
const router = require("express").Router();
// ? "Router" is special app for URL control in ExpressJS
// router app ile ayni calismaktadir ancak daha hafif bir sekilde modulerlik sagladigi icin routing mekanizmasinda(folder'lar ile calismada) cok onemli bir islev ustlenir.

const { BlogCategory, BlogPost } = require("../controllers/blogController");
const idValidation = require("../middlewares/idValidation");

// BlogCategory:
router
  .route("/categories")
  // ? get all
  .get(BlogCategory.list)
  // ? create
  .post(BlogCategory.create);

router
  .route("/categories/:categoryId(\\w+)")
  .all(idValidation)
  // ? get single
  .get(BlogCategory.read)
  // ? update
  .put(BlogCategory.update)
  .patch(BlogCategory.update)
  // ? delete
  .delete(BlogCategory.destroy);

// BlogPost:
router
  .route("/posts")
  // ? get all
  .get(BlogPost.list)
  // ? create
  .post(BlogPost.create);

router
  .route("/posts/:postId(\\w+)")
  .all(idValidation)
  // ? get single
  .get(BlogPost.read)
  // ? update
  .put(BlogPost.update)
  .patch(BlogPost.update)
  // ? delete
  .delete(BlogPost.destroy);

module.exports = router;
