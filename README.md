# AI-Powered Translation Plugin for Google Docs

This add-on integrates AI-powered translation capabilities directly into Google Docs, allowing users to translate text between multiple languages without leaving their document.

## Features

- **Seamless Google Docs Integration**: Adds a custom menu item and sidebar for easy access
- **Multiple Language Support**: Translate between English, Vietnamese, French, Korean, and Chinese
- **AI-Powered**: Leverages Gemini AI models for high-quality, context-aware translations
- **Customizable Options**:
  - Adjustable temperature setting to control translation creativity
  - Optional writing style specification
  - Selection of different Gemini models

## Installation Instructions

Follow these steps to test the add-on in your Google Docs environment:

1. **Create a new Google Apps Script project**:
   - Open Google Drive and navigate to **New > More > Google Apps Script**
   - This will open the Google Apps Script editor in a new tab

2. **Set up the project files**:
   - Replace the default content in the editor with the code from `Code.gs`
   - Click the **+** button next to "Files" to create a new HTML file
   - Name it `Sidebar.html`
   - Paste the HTML content provided in the submission into this file

3. **Save the project**:
   - Click on the unnamed project at the top and rename it to "AI-Powered Translator"
   - Click **Save** (Ctrl+S or ⌘+S)

4. **Run the project directly**:
   - Open a Google Doc where you want to test the translator
   - Return to the Apps Script editor
   - Select the `onOpen` function from the dropdown menu next to the "Debug" button
   - Click the "Run" button (►)
   - You may need to authorize the script - follow the prompts to grant the necessary permissions
   - After authorization, return to your Google Doc and refresh the page

5. **Access the add-on in Google Docs**:
   - After refreshing, you should see a new menu item called "AI-Powered Translator" in the top menu
   - Click on "AI-Powered Translator" > "Open Sidebar" to start using the tool

## Using the Add-on

1. The sidebar will appear on the right side of your document with a modern, card-based interface.

2. **Basic Translation**:
   - **Select Languages**: Choose your source language ("From") and target language ("To")
   - **Quick Language Swap**: Use the swap button (↔) between languages to quickly switch between them
   - **Enter Text**: Either select text in your document, or type/paste text in the input field
   - **Translate**: Click the "Translate" button to process your translation

3. **Advanced Options** (click "Advanced Options" to expand):
   - **AI Model Selection**: Choose between Gemini 1.5 Flash or Gemini 2.0 Flash
   - **Temperature Adjustment**: Use the slider to control translation creativity
     - Lower values (closer to 0): More conservative, consistent translations
     - Higher values (closer to 1): More creative, varied translations
   - **Writing Style**: Optionally specify a writing style (formal, friendly, academic, etc.)

4. **Working with Results**:
   - The translated text will appear in the output field at the bottom
   - Use the copy button (📋) in the top-right corner of the result field to copy the translation
   - You'll see a checkmark (✓) when the text has been successfully copied

5. **Tips for Best Results**:
   - For longer translations, select text directly in your document rather than pasting it
   - Experiment with different temperature settings based on your content type
   - Use writing style hints for more targeted translations (e.g., "academic", "conversational")

## Important Notes

- The add-on requires an internet connection to function properly.

## Troubleshooting

If you encounter any issues:
- Make sure you've authorized the script to run
- Check your internet connection
- Try refreshing the Google Docs page