const express = require("express");
const router = express.Router();
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");

// Carga las credenciales de Dialogflow
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "src/config/firebaseConfig.json", // Asegúrate de que esta ruta es correcta
});

const projectId = "firebaseConfig.json";
// Función para enviar mensajes a Dialogflow
async function sendToDialogflow(text, sessionId) {
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: "es", // Asegúrate de que sea el idioma correcto
      },
    },
  };
  
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  return result.fulfillmentText; // Esta es la respuesta del bot
}

app.post("/api/chatbot", async (req, res) => {
    try {
        const userMessage = req.body.message;
        const sessionId = uuid.v4();
        const botResponse = await sendToDialogflow(userMessage, sessionId);
        
        res.json({ reply: botResponse }); // Enviar la respuesta real
    } catch (error) {
        console.error("Error con Dialogflow:", error);
        res.status(500).json({ error: "Error al obtener respuesta del bot" });
    }
});
