const express = require("express");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const error = null;
  if (error) {
    res.status(400).json({ flash: error.message });
  }
  res.status(200).json({ flash: "User has been signed up !" });
});

module.exports = router;
