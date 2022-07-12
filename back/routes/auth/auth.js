const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const user = req.body;
  connection.query("INSERT INTO users SET ?", user, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
