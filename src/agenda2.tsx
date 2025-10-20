import { useRef } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations";

type Language = keyof typeof translations;
type TranslationKey = keyof (typeof translations)["en"]; // keys shared by all languages

interface AgendaItem {
  time: string;
  eventKey: TranslationKey;
  image: string;
  align: "left" | "right";
}

interface Agenda2Props {
  language: Language;
}

export default function Agenda2({ language }: Agenda2Props) {
  const lang: Language = language in translations ? language : "en";

  const agenda: AgendaItem[] = [
    { time: "3:00 PM", eventKey: "HAE_KEAY_PROCESSION", image: "./image/car.png", align: "right" },
    { time: "4:00 PM", eventKey: "WEDDING_CEREMONY", image: "./image/ring.png", align: "left" },
    { time: "5:00 PM", eventKey: "APPETIZERS", image: "./image/cake.png", align: "right" },
    { time: "6:00 PM", eventKey: "PHOTO_SESSION", image: "./image/photo.png", align: "left" },
    { time: "8:00 PM", eventKey: "BUFFET_DINNER", image: "./image/dinner.png", align: "right" },
    { time: "09:00 PM", eventKey: "FIRST_DANCE", image: "./image/music.png", align: "left" },
    { time: "10:00 PM", eventKey: "SOLO_DANCE", image: "./image/dance.png", align: "right" },
    { time: "11:00 PM", eventKey: "AFTER_PARTY", image: "./image/party.png", align: "left" },
  ];

  const imageWidth = 50;
  const imageHeight = 50;
  const distanceFromLine = 25;
  const connectorLength = 25;
  const sectionSpacing = 60;

  const itemRefs = useRef<HTMLDivElement[]>([]);

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
        padding: "120px 0 100px 0",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontFamily: "Parisienne, Boonhome",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: "bold",
          color: "#e82084",
          marginBottom: "100px",
        }}
      >
        {translations[lang].agenda}
      </motion.h1>

      {/* Main Center Line */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          bottom: "100px",
          left: "50%",
          width: "1px",
          backgroundColor: "black",
          transform: "translateX(-50%)",
        }}
      />

      {/* Timeline Items */}
      <div style={{ position: "relative" }}>
        {agenda.map((item, index) => (
          <motion.div
            key={index}
            ref={(el) => (itemRefs.current[index] = el!)}
            className={`timeline-item ${item.align}`}
            initial={{ opacity: 0, x: item.align === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              marginTop: `${sectionSpacing}px`,
            }}
          >
            {/* Left Side */}
            {item.align === "left" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  right: `calc(50% + ${distanceFromLine}px)`,
                  transform: "translateY(-50%)",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: `-${connectorLength}px`,
                    width: `${connectorLength}px`,
                    height: "1px",
                    backgroundColor: "black",
                  }}
                />
                <div style={{ left: "25%", maxWidth: "100px" }}>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black", fontSize: "10px" }}>
                    {item.time}
                  </p>
                  <p style={{ margin: 0, color: "black", fontSize: "10px", wordWrap: "break-word" }}>
                    {translations[lang][item.eventKey]}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.eventKey}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    objectFit: "contain",
                  }}
                />
              </div>
            )}

            {/* Right Side */}
            {item.align === "right" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: `calc(50% + ${distanceFromLine}px)`,
                  transform: "translateY(-50%)",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: `-${connectorLength}px`,
                    width: `${connectorLength}px`,
                    height: "1px",
                    backgroundColor: "black",
                  }}
                />
                <img
                  src={item.image}
                  alt={item.eventKey}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    objectFit: "contain",
                  }}
                />
                <div style={{ right: "25%", maxWidth: "80px" }}>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black", fontSize: "10px" }}>
                    {item.time}
                  </p>
                  <p style={{ margin: 0, color: "black", fontSize: "10px", wordWrap: "break-word" }}>
                    {translations[lang][item.eventKey]}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
