const express = require("express");
const router = express.Router(); // Use Router instead of express()

const { appendDataToSheet } = require("../controllers/sheet.controllers.js");

router.post("/", appendDataToSheet);

module.exports = router;
