// this will spin up an express application
const express = require("express");
const app = express();

//routes
const favoriteRoutes = require("./api/routes/favorites");
const newDataRoutes = require("./api/routes/newData");

// this sets up middleware
app.use((req, res, next) => {
  //fix CORS errors
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json({});
  }
  next();
});

app.use("/favorites", favoriteRoutes);
app.use("/newData", newDataRoutes);

module.exports = app;
