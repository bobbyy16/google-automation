const express = require("express");

const router = express.Router();

const { postToSlack } = require("../controllers/slack.controllers");

router.post("/", postToSlack);

module.exports = router;
