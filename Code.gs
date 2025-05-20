const GEMINI_API_KEY = "";

function onOpen() {
  DocumentApp.getUi()
    .createMenu('AI-Powered Translator')
    .addItem('Open Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('AI-Powered Translator');
  DocumentApp.getUi().showSidebar(html);
}

function getSelectedText() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  if (!selection) return '';
  
  const textElements = selection.getRangeElements();
  return textElements.map(e => e.getElement().asText().getText()).join('\n');
}

function translateText(data) {
  const { text, source_lang, target_lang, model, temperature, writing_style } = data;

  const prompt = `Translate the following text from ${source_lang} to ${target_lang}. ${
    writing_style ? "Please write in the following style: " + writing_style + "." : ""
  } Return only the translated text.\n${text}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: temperature || 0.7 }
  };

  const response = UrlFetchApp.fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
  });

  const result = JSON.parse(response.getContentText());
  return result?.candidates?.[0]?.content?.parts?.[0]?.text || "Translation failed.";
}