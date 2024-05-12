const { IncomingWebhook } = require("@slack/webhook");
// const { getAllPDFs } = require("../controllers/drive.controllers.js");

const postToSlack = async (webhookUrl, message) => {
  try {
    const webhook = new IncomingWebhook(webhookUrl);

    await webhook.send({
      text: message,
    });

    console.log("Message sent to Slack successfully.");
  } catch (error) {
    console.error("Error sending message to Slack:", error);
    throw new Error("Failed to send message to Slack");
  }
};

module.exports = { postToSlack };
