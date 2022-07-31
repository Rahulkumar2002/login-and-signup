require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const AuthRoutes = require("./routes/index.routes");
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

// middleware ;

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/v1/", AuthRoutes);

app.listen(port, () => {
  console.log("App is listing at port:" + port);
});
