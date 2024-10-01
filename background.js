chrome.runtime.onInstalled.addListener(() => {
  console.log("WhatsApp Translator extension installed.");
});

// Listen for messages from the popup (if needed)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translate") {
      // You can handle background tasks here if needed
      // For example, logging the translation request
      console.log("Translation request received:", request);
  }
});
