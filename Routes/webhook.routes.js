const express = require("express");
const { sendDataToWebhook } = require("../controllers/webhook.controllers.js");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Call the sendDataToWebhook function
    await sendDataToWebhook();
    res.status(200).send("Data sent to webhook successfully.");
  } catch (error) {
    console.error("Error sending data to webhook:", error);
    res.status(500).send("Failed to send data to webhook.");
  }
});

module.exports = router;
