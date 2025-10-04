import { useEffect, useRef } from "react";
import "./Agenda2.css";

interface AgendaItem {
  time: string;
  event: string;
  image: string;
  align: "left" | "right";
}

export default function Agenda2() {
  const agenda: AgendaItem[] = [
    { time: "3:00 PM", event: "HAE KEAY PROCESSION", image: "./image/car.png", align: "right" },
    { time: "4:00 PM", event: "WEDDING CEREMONY", image: "./image/ring.png", align: "left" },
    { time: "5:00 PM", event: "APPETIZERS", image: "./image/cake.png", align: "right" },
    { time: "6:00 PM", event: "PHOTO SESSION", image: "./image/photo.png", align: "left" },
    { time: "8:00 PM", event: "BUFFET DINNER", image: "./image/dinner.png", align: "right" },
    { time: "09:00 PM", event: "FIRST DANCE", image: "./image/music.png", align: "left" },
    { time: "10:00 PM", event: "SOLO DANCE", image: "./image/dance.png", align: "right" },
    { time: "11:00 PM", event: "AFTER PARTY", image: "./image/party.png", align: "left" },
  ];

  const imageWidth = 50;
  const imageHeight = 50;
  const distanceFromLine = 25;
  const connectorLength = 25; // short line from center
  const sectionSpacing = 60;

  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

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
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "2.5rem",
          marginBottom: "100px",
        }}
      >
        Wedding Agenda
      </h1>

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
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el!)}
            className={`timeline-item ${item.align}`}
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
                {/* Connecting Line */}
                <div
                  style={{
                    position: "absolute",
                    right: `-${connectorLength}px`,
                    width: `${connectorLength}px`,
                    height: "1px",
                    backgroundColor: "black",
                  }}
                />
                {/* Text + Image */}
                <div style={{ textAlign: "left", maxWidth: "120px" }}>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black", fontSize: "13px" }}>{item.time}</p>
                  <p style={{ margin: 0, color: "black", fontSize: "13px", wordWrap: "break-word" }}>{item.event}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.event}
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
                {/* Connecting Line */}
                <div
                  style={{
                    position: "absolute",
                    left: `-${connectorLength}px`,
                    width: `${connectorLength}px`,
                    height: "1px",
                    backgroundColor: "black",
                  }}
                />
                {/* Image + Text */}
                <img
                  src={item.image}
                  alt={item.event}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    objectFit: "contain",
                  }}
                />
                <div style={{ textAlign: "right", maxWidth: "120px" }}>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black", fontSize: "13px" }}>{item.time}</p>
                  <p style={{ margin: 0, color: "black", fontSize: "13px", wordWrap: "break-word" }}>{item.event}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .timeline-item div {
              transform: translateY(-50%) scale(0.9);
            }
            h1 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .timeline-item div {
              transform: translateY(-50%) scale(0.85);
            }
            .timeline-item div p {
              font-size: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
