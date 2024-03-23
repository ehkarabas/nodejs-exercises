"use strict";
const router = require("express").Router();
// ? "Router" is special app for URL control in ExpressJS
// router app ile ayni calismaktadir ancak daha hafif bir sekilde modulerlik sagladigi icin routing mekanizmasinda(folder'lar ile calismada) cok onemli bir islev ustlenir.

// Check functionality of userCheck middleware
router.all("/", (req, res) => {
  if (req.isLogin) {
    res.json({
      error: false,
      message: "WELCOME BLOG API PROJECT",
      session: req.session,
      user: req.user,
    });
  } else {
    res.json({
      error: false,
      message: "WELCOME BLOG API PROJECT",
      session: req.session,
    });
  }
});

// router.get("/", (req, res) => {
//   // res.send("welcome to router middleware");
//   res.json({
//     error: false,
//     message: "WELCOME BLOG API PROJECT",
//     loggedInUser: req.session,
//   });
// });

module.exports = router;
