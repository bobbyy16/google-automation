function triggerWebhook(payload) {
  try {
    const endpoint = "yourApiEndpoint";
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
    };
    UrlFetchApp.fetch(endpoint, options);
    console.log("POST request sent to webhook successfully.");
  } catch (error) {
    console.error("Error triggering webhook:", error);
    throw new Error("Failed to trigger webhook.");
  }
}
