const http = require("http");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

const authRouter = require("./routes/auth/auth");

const port = process.env.PORT || 5001;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
