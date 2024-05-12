const express = require("express");
const cors = require("cors");
require("dotenv").config();

const driveRoutes = require("./Routes/drive.routes.js");
const sheetRoutes = require("./Routes/sheet.routes.js");
const slackRoutes = require("./Routes/slack.routes.js");
const webhookRoutes = require("./Routes/webhook.routes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <html>
    <head><title>Success!</title></head>
    <body>
      <h1>You did it!</h1>
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
    </body>
  </html>
`);
});

app.use("/getfiles", driveRoutes);
app.use("/postToGoogleSheet", sheetRoutes);
app.use("/postToSlack", slackRoutes);

// POST endpoint to trigger sending data to webhook
app.use("/sendDataToWebhook", webhookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is listening at http:/localhost/${PORT}`);
});
