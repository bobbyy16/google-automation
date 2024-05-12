# Online Exam Submission Automation :rocket:

This project automates handling internal exam submissions from students during online classes.

## Overview

Managing internal exams in online classes often involves collecting student answer sheets as PDFs. This project offers a streamlined solution using Google Drive, Google Sheets, and Slack for efficient submission management.

## Features

- **Automatic Data Processing:** Exam PDFs are automatically processed every 5 minutes.
- **Google Drive Integration:** Students upload their PDFs to a designated folder in Google Drive.
- **Google Sheets Logging:** Data from uploaded files is logged in a Google Sheet for easy tracking.
- **Slack Notifications:** New submissions trigger notifications sent to relevant parties via Slack.

## Setup

### Prerequisites

- A Google account with access to Google Drive, Google Sheets, and Slack.
- Google Apps Script enabled.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/online-exam-submission.git
   ```

   Use code with caution.

2. Set up environment variables:

   - Create a file named `.env` in the project's root directory.
   - Add the following lines to the `.env` file, replacing placeholders with your actual values:
     ```
     PORT=3000
     FOLDER_ID=your_google_drive_folder_id
     SHEET_FOLDER_ID=your_google_sheet_folder_id
     SLACK_WEBHOOK_URL=your_slack_webhook_url
     ```

3. Set up Google Drive:

   - Create a folder for exam submissions.
   - Use the `FOLDER_ID` from the `.env` file as the folder ID.

4. Set up Google Sheets:

   - Create a Google Sheet to log exam submissions.
   - Use the `SHEET_FOLDER_ID` from the `.env` file as the Sheet ID.

5. Set up Slack:

   - Create a webhook URL for sending notifications.
   - Use the `SLACK_WEBHOOK_URL` from the `.env` file as the webhook URL.

6. Deploy Google Apps Script:

   - Copy the `Code.gs` file into your Google Apps Script project.
   - Set up a time-driven trigger to run the `sendDataToWebhook` function every 5 minutes.

7. Run the application:
   - Start the Express server using `npm start`.

## License

This project is licensed under the MIT License (see the `LICENSE` file for details).

## Screenshots

- **Google Drive Folder**
  ![Google Drive Folder Screenshot](path_to_screenshot)

- **Google Sheet Log**
  ![Google Sheet Log Screenshot](path_to_screenshot)

- **Slack Notification**
  ![Slack Notification Screenshot](path_to_screenshot)
