import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; // For fade-in animation

interface GuestMessage {
  name: string;
  messages: string;
  timestamp: string;
}

const API_URL = "https://sheetdb.io/api/v1/icj1nzjtzfp2w";

export default function WeddingGuestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch messages from SheetDB
  useEffect(() => {
const fetchMessages = async () => {
  try {
    const res = await axios.get(API_URL);
    // Type assertion: tell TS this is GuestMessage[]
    const fetchedMessages: GuestMessage[] = (res.data as GuestMessage[]).slice(-50).reverse();
    setMessages(fetchedMessages);
  } catch (err) {
    console.error("Error fetching messages:", err);
  }
};

    fetchMessages();
  }, []);

  // Submit a new message
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMsg: GuestMessage = {
      name,
      messages: message,
      timestamp: new Date().toISOString(),
    };

    setIsLoading(true);
    try {
      const response = await axios.post(API_URL, { data: [newMsg] }, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("POST response:", response.data);

      // Optimistically update messages locally
      setMessages([{ ...newMsg, id: Date.now() }, ...messages].slice(0, 50));
      setName("");
      setMessage("");
    } catch (err) {
      console.error("Error saving message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center py-5"
      style={{
        backgroundImage: 'url("./image/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {/* Header */}
      <h3
        className="text-center mb-4"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
          color: "#e82084",
          marginTop: "20px",
        }}
      >
        ຄຳອວຍພອນຂອງພວກທ່ານ
      </h3>

      {/* Form */}
      <form className="w-100" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="ຊື່ຂອງທ່ານ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ borderRadius: "12px", borderColor: "rgba(232,32,132,0.5)" }}
        />
        <textarea
          className="form-control mb-2"
          placeholder="ຄຳອວຍພອນ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ borderRadius: "12px", borderColor: "rgba(232,32,132,0.5)" }}
        />
        <div className="d-flex justify-content-center mt-3">
          <button
            type="submit"
            className="btn btn-gradient px-4 fw-bold"
            disabled={isLoading}
            style={{
              background: "linear-gradient(135deg, #e82084, #ff69b4)",
              color: "#fff",
              borderRadius: "30px",
              border: "none",
            }}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                ກຳລັງສົ່ງ...
              </>
            ) : (
              "ສົ່ງຄຳອວຍພອນ"
            )}
          </button>
        </div>
      </form>

      {/* Messages */}
      <div
        className="w-100 mt-4"
        style={{
          maxWidth: "600px",
          maxHeight: "65vh",
          overflowY: "auto",
          padding: "1rem",
          backgroundColor: "#fff0f5",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        {messages.length === 0 && (
          <p className="text-center text-secondary">ຍັງບໍ່ມີຂໍ້ຄວາມ 😍</p>
        )}

        {messages.map((msg, idx) => (
          <div
            key={msg.timestamp + idx}
            className="card mb-3 fade-in shadow-sm"
            style={{ borderRadius: "15px", borderColor: "rgba(232,32,132,0.3)" }}
          >
            <div className="card-body" style={{ backgroundColor: "#fff0f5" }}>
              <strong style={{ color: "#e82084" }}>{msg.name}</strong>{" "}
              <span className="text-muted small">{new Date(msg.timestamp).toLocaleString("lo-LA")}</span>
              <p className="mb-0 mt-2">{msg.messages}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
