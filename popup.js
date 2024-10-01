const translations = {
    "hello": {
        "es": "hola",
        "fr": "bonjour",
        "de": "hallo"
    },
    "how are you?": {
        "es": "¿cómo estás?",
        "fr": "comment ça va?",
        "de": "wie geht's?"
    },
    "thank you": {
        "es": "gracias",
        "fr": "merci",
        "de": "danke"
    },
    // Add more translations as needed
};

document.getElementById('translateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim().toLowerCase(); // Convert to lowercase
    const selectedLanguage = document.getElementById('languageSelect').value;

    const translatedText = translateText(inputText, selectedLanguage);
    document.getElementById('outputText').textContent = translatedText;
});

function translateText(text, language) {
    // Check if the text exists in the translations object
    if (translations[text]) {
        return translations[text][language] || text; // Return translated text or original if not found
    }
    return "Translation not available"; // Handle case where translation doesn't exist
}
