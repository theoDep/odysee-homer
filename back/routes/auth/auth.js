const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const newUser = req.body;
  connection.query("INSERT INTO users SET ?", newUser, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: "User has been signed up" });
    }
  });
});

module.exports = router;
