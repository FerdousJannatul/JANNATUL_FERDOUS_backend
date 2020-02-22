const express = require("express");
const router = express.Router();
let newData = require("../mockData/newDataset");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /newData",
        newData: [newData]
    });
});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /newData"
    });
});


module.exports = router;
