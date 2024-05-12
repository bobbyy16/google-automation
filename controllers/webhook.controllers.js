const { appendDataToSheet } = require("../controllers/sheet.controllers");
const { postToSlack } = require("../controllers/slack.controllers");
const { getAllPDFs } = require("../controllers/drive.controllers.js");

const sendDataToWebhook = async () => {
  try {
    const pdfFiles = await getAllPDFs();

    for (const pdfFile of pdfFiles) {
      const { name: filename, uploaderName, url } = pdfFile;

      const message = `${uploaderName} just uploaded the PDF '${filename}'.\nDrive Link: ${url}`;

      await appendDataToSheet();
      await postToSlack(process.env.SLACK_WEBHOOK_URL, message);
    }
  } catch (error) {
    console.error("Error sending data to webhook:", error);
    throw new Error("Failed to send data to webhook");
  }
};

module.exports = { sendDataToWebhook };
