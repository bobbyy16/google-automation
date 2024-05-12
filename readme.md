# Online Exam Submission Automation :rocket:

This project automates handling internal exam submissions from students during online classes.

## Overview

Managing internal exams in online classes often involves collecting student answer sheets as PDFs. This project offers a streamlined solution using Google Drive, Google Sheets, and Slack for efficient submission management.

## Features

- **Automatic Data Processing:** Exam PDFs are automatically processed every 5 minutes.
- **Google Drive Integration:** Students upload their PDFs to a designated folder in Google Drive.
- **Google Sheets Logging:** Data from uploaded files is logged in a Google Sheet for easy tracking.
- **Slack Notifications:** New submissions trigger notifications sent to relevant parties via Slack.

### Prerequisites

- A Google account with access to Google Drive, Google Sheets, and Slack.
- Google Apps Script enabled.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/google-automation.git
   ```

2. **Change the current directory:**

   ```bash
   cd  google-automation
   ```

3. **Environment Variables:**

   - Create a file named `.env` in the project's root directory.
   - Add the following lines to the `.env` file, replacing placeholders with your actual values:

     ```plaintext
     PORT=3000
     FOLDER_ID=your_google_drive_folder_id
     SHEET_FOLDER_ID=your_google_sheet_folder_id
     SLACK_WEBHOOK_URL=your_slack_webhook_url
     ```

4. **Google Drive Setup:**

   - Create a folder for exam submissions.
   - Use the `FOLDER_ID` from the `.env` file as the folder ID.

5. **Google Sheets Setup:**

   - Create a Google Sheet to log exam submissions.
   - Use the `SHEET_FOLDER_ID` from the `.env` file as the Sheet ID.

6. **Slack Setup:**

   - Create a webhook URL for sending notifications.
   - Use the `SLACK_WEBHOOK_URL` from the `.env` file as the webhook URL.

7. **Google Apps Script:**

   - Copy the `Code.gs` file into your Google Apps Script project.
   - Set up a time-driven trigger to run the `sendDataToWebhook` function every 5 minutes.

8. **Run the application:**

   - Start the Express server using `npm start`.

## Screenshots

- Google Drive Folder
- Google Sheet Log
- Slack Notification

## Project Workflow

1. **Student Submission:** Students upload their exam answer sheets as PDFs to the designated folder in Google Drive.
2. **Automatic Processing:** Every 5 minutes, the project's script automatically processes the newly uploaded exam PDFs in the Google Drive folder.
3. **Data Logging:** Information from the processed exam PDFs, such as student details and submission timestamps, is logged into a Google Sheet for tracking and record-keeping purposes.
4. **Slack Notifications:** Upon successful processing of new exam submissions, notifications are sent via Slack to relevant parties, informing them about the new submissions and any other relevant details.
5. **Continuous Monitoring:** The project continues to run in the background, continuously monitoring the designated Google Drive folder for new exam submissions and repeating the processing and notification cycle as required.
