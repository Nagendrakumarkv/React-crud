const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("config");

require("dotenv").config();

const app = express();

//database connection to mongodb atlas
const dbConfig = config.get("USER.dbConfig.dbName");

mongoose
  .connect(dbConfig, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("not connected to database", err);
  });

const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.all("*", (req, res) => {
  res.send("Invalid url or this route url is not available");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
