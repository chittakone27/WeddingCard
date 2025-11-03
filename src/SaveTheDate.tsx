import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations"; // make sure translations include SaveTheDate

export const WEDDING_DATE = new Date("2025-12-20T00:00:00");

interface SaveTheDateProps {
  language: "en" | "lao" 
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        paddingTop: "10vh",
        paddingBottom: "5vh",
      }}
    >
      <motion.div
        className="text-center container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mb-4" style={{ fontWeight: "bold" ,fontFamily: "Open sans, Noto Sans Lao",}}>
          {translations[lang].SaveTheDate}
        </h2>

        <div
          className="bg-light border rounded shadow d-inline-block p-4 p-md-5 mb-5"
          style={{ fontFamily: "Open sans, Noto Sans Lao"}}
        >
          <div className="text-uppercase fw-bold text-secondary" style={{ fontSize: "1rem" }}>
            {translations[lang].Month || "December"}
          </div>
          <div
            className="fw-bold"
            style={{ fontSize: "clamp(4rem, 12vw, 6rem)", lineHeight: 1 }}
          >
            20
          </div>
          <div className="text-muted" style={{ fontSize: "1.25rem" }}>
            {translations[lang].Weekday || "Saturday"}, 2025
          </div>
        </div>

        {timeLeft ? (
          <div className="mt-2" style={{fontFamily: "Open Sans, Noto Sans Lao",
 }}>
            <h5 className="mb-4" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600 }}>
              {translations[lang].CountdownText || "Countdown to the Big Day"}
            </h5>
            <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap"   style={{
    transform: "scale(1.3)",
    transformOrigin: "center", // keeps it centered while scaling
  }}>
              <CountdownBox label={translations[lang].Days || "Days"} value={timeLeft.days} />
              <CountdownBox label={translations[lang].Hours || "Hours"} value={timeLeft.hours} />
              <CountdownBox label={translations[lang].Minutes || "Minutes"} value={timeLeft.minutes} />
              <CountdownBox label={translations[lang].Seconds || "Seconds"} value={timeLeft.seconds} />
            </div>
          </div>
        ) : (
          <p className="mt-5 text-success fw-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            {translations[lang].BigDayText || "It's the big day! 🎉"}
          </p>
        )}
      </motion.div>
    </div>
  );
}

function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center mb-2">
      <div
        className="border rounded p-2 bg-white shadow-sm"
        style={{
          minWidth: "60px",
          maxWidth: "100px",
          width: "clamp(60px, 15vw, 100px)",
          fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
        }}
      >
        <div className="fw-bold">{value.toString().padStart(2, "0")}</div>
        <div className="small text-muted">{label}</div>
      </div>
    </div>
  );
}
