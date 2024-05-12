const express = require("express");
const router = express.Router();
const { getAllPDFs } = require("../controllers/drive.controllers.js");

router.post("/", getAllPDFs);

module.exports = router;
