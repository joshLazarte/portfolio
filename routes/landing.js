const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/redo", (req, res) => {
  res.render("startover");
});

module.exports = router;
