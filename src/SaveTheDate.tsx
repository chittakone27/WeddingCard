import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations";

export const WEDDING_DATE = new Date("2025-12-20T00:00:00");

interface SaveTheDateProps {
  language: "en" | "lao";
}

function calculateTimeLeft() {
  const now = new Date();
  const difference = WEDDING_DATE.getTime() - now.getTime();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function SaveTheDate({ language }: SaveTheDateProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const lang = language in translations ? language : "en";

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        // background: "linear-gradient(to right, #fef9f9, #ffe6f0)", // soft pink gradient
        fontFamily: "Open Sans, Noto Sans Lao",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center" }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#d6336c", // elegant pink
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          {translations[lang].SaveTheDate}
        </h2>

        {/* Wedding Date Box */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "3rem 2rem",
            marginBottom: "3rem",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            display: "inline-block",
          }}
        >
          <div
            className="text-uppercase fw-bold text-secondary"
            style={{ fontSize: "1rem", letterSpacing: "1px" }}
          >
            {translations[lang].Month}
          </div>
          <div
            style={{
              fontSize: "clamp(5rem, 12vw, 7rem)",
              fontWeight: "bold",
              lineHeight: 1,
              color: "#d6336c",
              margin: "0.5rem 0",
            }}
          >
            20
          </div>
          <div style={{ fontSize: "1.25rem", color: "#555" }}>
            {translations[lang].Weekday}, 2025
          </div>
        </div>

        {/* Countdown */}
        {timeLeft ? (
          <div>
            <h5
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "#444",
              }}
            >
              {translations[lang].CountdownText}
            </h5>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <CountdownBox label={translations[lang].Days || "Days"} value={timeLeft.days} />
              <CountdownBox label={translations[lang].Hours || "Hours"} value={timeLeft.hours} />
              <CountdownBox label={translations[lang].Minutes || "Minutes"} value={timeLeft.minutes} />
              <CountdownBox label={translations[lang].Seconds || "Seconds"} value={timeLeft.seconds} />
            </div>
          </div>
        ) : (
          <p
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: "bold",
              color: "#28a745",
              marginTop: "2rem",
            }}
          >
            {translations[lang].BigDayText}
          </p>
        )}
      </motion.div>
    </div>
  );
}

function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <div
        style={{
          minWidth: "70px",
          maxWidth: "100px",
          width: "clamp(70px, 12vw, 100px)",
          padding: "1rem",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          fontWeight: "bold",
        }}
      >
        <div style={{ fontSize: "1.5rem", color: "#d6336c" }}>{value.toString().padStart(2, "0")}</div>
        <div style={{ fontSize: "0.9rem", color: "#666" }}>{label}</div>
      </div>
    </div>
  );
}
