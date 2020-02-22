const express = require("express");
const router = express.Router();
let favoriteData = require("../mockData/favoritesData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /favorites",
    favorite: [favoriteData]
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /favorites"
  });
});


module.exports = router;
