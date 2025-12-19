import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // 1️⃣ Add user message immediately
    const userMsg = {
      sender: "user",
      text: input,
      time,
    };
    setMessages((prev) => [...prev, userMsg]);

    // 2️⃣ Clear input right away
    setInput("");

    // 3️⃣ Show typing indicator
    setIsTyping(true);

    try {
      const response = await axios.post("http://localhost:8080/api/ai/chat", {
        bot_id: "demo-bot",
        message: input,
      });

      // 4️⃣ Add bot response
      const botMsg = {
        sender: "bot",
        text: response.data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error sending message:", err);

      const errMsg = {
        sender: "bot",
        text: "Error: failed to reach server.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, errMsg]);
    } finally {
      // 5️⃣ Stop typing indicator no matter what
      setIsTyping(false);
    }
  };


  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      backgroundColor: "#f3f4f6",
    }}
  >
    {/* CHAT COLUMN */}
    <div
      style={{
        width: "420px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Chatbot</h2>

      {/* MESSAGES BOX */}
      <div
        style={{
          border: "1px solid #ccc",
          height: "350px",
          overflowY: "auto",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
          {/* MESSAGE GROUP */}
          <div style={{ display: "flex", flexDirection: "column" }}>
      
          {/* MESSAGE BUBBLE */}
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "12px",
              background:
                msg.sender === "user" ? "#0078ff" : "#e5e5e5",
              color: msg.sender === "user" ? "white" : "black",
              maxWidth: "75%",
              wordWrap: "break-word",
            }}
          >
            {msg.text}
          </div>

        {/* TIMESTAMP */}
          <div
            style={{
              fontSize: "0.7rem",
              opacity: 0.6,
              marginTop: "2px",
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.time}
          </div>
        </div>
      </div>
      ))}


        {isTyping && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "12px",
                background: "#e5e5e5",
                fontStyle: "italic",
                opacity: 0.7,
              }}
            >
            •••
            </div>
          </div>
        )}
      </div>

      {/* INPUT ROW */}
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#0078ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  </div>
);

}

export default Chatbot;
