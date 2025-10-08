import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'; // CSS สำหรับ animation
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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get<GuestMessage[]>(API_URL);
        setMessages(res.data.slice(-50).reverse());
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, []);

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
      await axios.post(API_URL, { data: [newMsg] });
      // เพิ่ม property `id` สำหรับ key และ animation
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
      style={{
        backgroundImage: 'url("./image/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "115px",
      }}
    >
      <h3 style={{ fontSize: "2rem", color: "#050505ff", marginBottom: "1.5rem" }}>
        ຄຳອວຍພອນຂອງພວກທ່ານ
      </h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="ຊື່ຂອງທ່ານ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "90%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid rgba(0,204,204,1)",
            borderRadius: "10px",
          }}
        />
        <textarea
          placeholder="ຄຳອວຍພອນ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{
            border: "1px solid rgba(0,204,204,1)",
            borderRadius: "10px",
            width: "90%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />

        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <button
            type="submit"
            className="btn px-4 py-2 fw-semibold"
            style={{
              border: "1px solid rgba(0,204,204,1)",
              borderRadius: "10px",
              backgroundColor: "rgba(0,204,204,1)",
              color: "rgba(249, 251, 251, 1)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            disabled={isLoading}
          >
            {isLoading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            {isLoading ? "ກຳລັງສົ່ງ..." : "ສົ່ງຄຳອວຍພອນ"}
          </button>
        </div>
      </form>

<div
  style={{
    display: "flex",
    justifyContent: "center", // horizontally center
    alignItems: "center",     // vertically center (optional)
    width: "100%",
    minHeight: 400,       // make sure it fills screen height
    backgroundColor: "#f9f9f9", // soft background optional
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "600px",     // limits width for better look
      maxHeight: 400,
      overflowY: "auto",
      textAlign: "center",
      padding: "1rem",
      borderRadius: "16px",
    }}
  >
    {messages.length === 0 && (
      <p style={{ color: "#555" }}>ຍັງບໍ່ມີຂໍ້ຄວາມ 😍</p>
    )}

    {messages.map((msg, idx) => (
      <div
        key={msg.timestamp + idx}
        className="fade-in"
        style={{
          border: "1px solid rgba(0,204,204,1)",
          backgroundColor: "white",
          color: "rgba(0,204,204,1)",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          textAlign: "left",
        }}
      >
        <strong style={{ color: "#d63384" }}>{msg.name}</strong>{" "}
        <span style={{ fontSize: "0.8rem", color: "#999" }}>
          {new Date(msg.timestamp).toLocaleString("lo-LA")}
        </span>
        <p style={{ marginTop: "0.5rem" }}>{msg.messages}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
