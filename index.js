const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const newsRoute = require("./api/routes/news");
const userRoute = require("./api/routes/user");

const app = express();
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database Connection
URI = process.env.databaseURI
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.error(`db error: ${err.message}`);
  });

// Routes

app.use("/news", newsRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("<h3>Server Started</h3>");
});

// Create server
PORT = process.env.serverPORT
app.listen(process.env.serverPORT, () => {
  console.log(`Server running on "http://localhost:${process.env.serverPORT}"`);
});
