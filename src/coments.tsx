import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { translations } from "./translations";

interface GuestMessage {
  id?: number;
  name: string;
  messages: string;
  timestamp: string;
}

interface WeddingGuestbookProps {
  language: "en" | "lao";
}

const API_URL =
  "https://klwjccsvwnrkkmkwsmqm.hasura.ap-southeast-1.nhost.run/api/rest/wedding_comment";

export default function WeddingGuestbook({ language }: WeddingGuestbookProps) {
  const lang = language in translations ? language : "en";

  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch comments
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get<{ wedding_comment: GuestMessage[] }>(API_URL, {
          headers: { "Content-Type": "application/json", "x-hasura-role": "anonymous" },
        });
        const fetchedMessages = res.data.wedding_comment || [];
        setMessages(fetchedMessages.slice(-50).reverse());
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, []);

  // Post new comment
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMsg: GuestMessage = { name, messages: message, timestamp: new Date().toISOString() };

    setIsLoading(true);
    try {
      const res = await axios.post<{ insert_wedding_comment_one: GuestMessage }>(
        API_URL,
        { object: newMsg },
        { headers: { "Content-Type": "application/json", "x-hasura-role": "anonymous" } }
      );

      const savedMsg = res.data.insert_wedding_comment_one;
      setMessages([savedMsg, ...messages].slice(0, 50));
      setName("");
      setMessage("");
    } catch (err) {
      console.error("Error saving message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Time ago helper
  function timeAgo(timestamp: string) {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diff < 60) return `${diff}${translations[lang].Seconds}`;
    if (diff < 3600) return `${Math.floor(diff / 60)}${translations[lang].minutesAgo}`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}${translations[lang].hoursAgo}`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}${translations[lang].daysAgo}`;
    return past.toLocaleDateString();
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-start py-4 px-3"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff8fb",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Open Sans, Noto Sans Lao",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <h3
        className="text-center mb-4"
        style={{
          color: "#e82084",
          fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
          marginTop: "10px",
          fontWeight: "600",
          fontFamily: "Parisienne, Noto Sans Lao",
        }}
      >
        {translations[lang].guestbookTitle}
      </h3>

      {/* Form */}
      <form
        className="w-100 px-2"
        style={{ maxWidth: "600px", width: "100%" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control mb-2"
          placeholder={translations[lang].namePlaceholder || "Your Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            borderRadius: "12px",
            borderColor: "rgba(232,32,132,0.5)",
            fontSize: "1rem",
          }}
        />
        <textarea
          className="form-control mb-2"
          placeholder={translations[lang].messagePlaceholder || "Your Wishes..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{
            borderRadius: "12px",
            borderColor: "rgba(232,32,132,0.5)",
            fontSize: "1rem",
          }}
        />
        <div className="d-flex justify-content-center mt-3">
          <button
            type="submit"
            className="btn fw-bold"
            disabled={isLoading}
            style={{
              background: "linear-gradient(135deg, #e82084, #ff69b4)",
              color: "#fff",
              borderRadius: "30px",
              border: "none",
              padding: "0.6rem 2rem",
              fontSize: "1rem",
            }}
          >
            {isLoading
              ? translations[lang].sendingButton
              : translations[lang].submitButton}
          </button>
        </div>
      </form>

      {/* Messages */}
      <div
        className="w-100 mt-4"
        style={{
          maxWidth: "600px",
          width: "100%",
          maxHeight: "60vh",
          overflowY: "auto",
          padding: "1rem",
          backgroundColor: "#fff0f5",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        {messages.length === 0 && (
          <p className="text-center text-secondary">
            {translations[lang].noMessages || "No messages yet 😍"}
          </p>
        )}

        {messages.map((msg, idx) => (
          <div
            key={msg.id || idx}
            className="card mb-3 shadow-sm"
            style={{
              borderRadius: "15px",
              borderColor: "rgba(232,32,132,0.3)",
            }}
          >
            <div
              className="card-body"
              style={{
                backgroundColor: "#fff0f5",
                textAlign: "left",
                wordWrap: "break-word",
              }}
            >
              <p className="mb-1" style={{ fontSize: "0.95rem" }}>
                <strong style={{ color: "#e82084" }}>{msg.name}</strong>:{" "}
                {msg.messages}
              </p>
              <div className="text-end">
                <small className="text-muted">{timeAgo(msg.timestamp)}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
