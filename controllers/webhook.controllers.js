const { appendDataToSheet } = require("../controllers/sheet.controllers");
const { postToSlack } = require("../controllers/slack.controllers");
const { getAllPDFs } = require("../controllers/drive.controllers.js");

// Maintain a set to store processed PDFs
const processedPDFs = new Set();

const sendDataToWebhook = async () => {
  try {
    const pdfFiles = await getAllPDFs();

    for (const pdfFile of pdfFiles) {
      const { name: filename, uploaderName, url } = pdfFile;

      // Check if PDF has already been processed
      if (!processedPDFs.has(filename)) {
        await appendDataToSheet(pdfFile); // Pass pdfFile to appendDataToSheet
        const message = `${uploaderName} just uploaded the PDF '${filename}'.\nDrive Link: ${url}`;
        await postToSlack(process.env.SLACK_WEBHOOK_URL, message);
        // Add the filename to the set of processed PDFs
        processedPDFs.add(filename);
      }
    }
  } catch (error) {
    console.error("Error sending data to webhook:", error);
    throw new Error("Failed to send data to webhook");
  }
};

module.exports = { sendDataToWebhook };
