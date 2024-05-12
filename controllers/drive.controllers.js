const { google } = require("googleapis");
const apikeys = require("../credentials.json");
const SCOPE = ["https://www.googleapis.com/auth/drive"];

async function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  );

  await jwtClient.authorize();

  return jwtClient;
}

const getAllPDFs = async () => {
  try {
    const auth = await authorize();
    const drive = google.drive({ version: "v3", auth });

    const folderId = process.env.FOLDER_ID;

    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/pdf'`,
      fields: "files(id, name, createdTime, owners)",
    });

    const pdfFiles = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      createdTime: formatDate(file.createdTime),
      uploaderName: file.owners[0].displayName,
      uploaderEmail: file.owners[0].emailAddress,
      url: `https://drive.google.com/file/d/${file.id}/view?usp=drive_link`,
    }));

    return pdfFiles;
  } catch (error) {
    console.error("Error fetching PDF files:", error);
    throw new Error("Failed to fetch PDF files");
  }
};

// Function to format date to dd/mm/yyyy
function formatDate(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const options = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: true,
  };
  return dateTime.toLocaleString("en-US", options);
}

module.exports = { getAllPDFs };
