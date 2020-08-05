const express = require("express");
const router = express.Router();
const DB = require("./moongoDb");
const send = require("./send")


router.use("/send", send)

module.exports = router