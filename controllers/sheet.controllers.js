const { getAllPDFs } = require("./drive.controllers.js");
const { google } = require("googleapis");
const apikeys = require("../credentials.json");

// Function to authorize access to Google Drive API
async function authorizeSheets() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  await jwtClient.authorize();

  return jwtClient;
}

const appendDataToSheet = async (pdfFile) => {
  try {
    const auth = await authorizeSheets();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_FOLDER_ID;
    const range = "Sheet1!A1:D1";

    const data = [
      [
        pdfFile.name,
        pdfFile.uploaderName,
        pdfFile.uploaderEmail,
        pdfFile.createdTime,
        pdfFile.url,
      ],
    ];

    const resource = {
      values: data,
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource,
    });

    console.log(`${result.data.updates.updatedCells} cells appended.`);
  } catch (error) {
    console.error("Error appending data to sheet:", error);
  }
};

module.exports = { appendDataToSheet };
