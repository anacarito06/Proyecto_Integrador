// backend/src/services/dialogflow.js
const { SessionsClient } = require('@google-cloud/dialogflow');
const path = require('path');
const keyPath = "C:/Users/Carolina/Desktop/ParqueSoft/Proyecto-Integrador/Sistema-pedidos-restaurante/backend/src/services/dialogflow.js";
process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;



// Configurar el cliente de Dialogflow
const projectId = 'sistema-de-pedidos-11b69'; 
const keyFilePath = path.join(__dirname, '../dialogflow.js');

const sessionClient = new SessionsClient({
  keyFilename: keyFilePath,
});

// Función para detectar intenciones
const detectIntent = async (sessionId, query) => {
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'es', // Idioma del chatbot
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult.fulfillmentText;
};

app.post("/api/chatbot", async (req, res) => {
  const userMessage = req.body.message;
  try {
      const response = await detectIntent(userMessage);
      res.json({ reply: response });
  } catch (error) {
      console.error("Error con Dialogflow", error);
      res.status(500).json({ error: "Error interno del chatbot" });
  }
});

module.exports = { detectIntent };