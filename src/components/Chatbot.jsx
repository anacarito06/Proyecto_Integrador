import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState(""); // Definir el estado para el input

    const sendMessage = async () => {
        const userMessage = { text: inputText, sender: "user" };
        setMessages(prev => [...prev, userMessage]); // Agregar el mensaje del usuario

        try {
            const response = await axios.post("http://localhost:3001/api/chatbot", { message: inputText });
            console.log("Respuesta del backend:", response.data);
            const botMessage = { text: response.data.reply, sender: "bot" };
            setMessages(prev => [...prev, botMessage]); // Agregar respuesta del bot
        } catch (error) {
            console.error("Error al conectar con el chatbot", error);
        }

        setInputText(""); // Limpiar el input después de enviar
    };

    return (
        <div style={{ width: "300px", border: "1px solid #ccc", padding: "10px" }}>
            <h3>Chatbot</h3>
            <div style={{ height: "200px", overflow: "scroll", border: "1px solid #ddd", padding: "5px" }}>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
                ))}
            </div>
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder="Escribe un mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    );
};

export default Chatbot;

