import React, { useEffect, useRef, useState } from "react";
import "./Agenda2.css";

interface AgendaItem {
  time: string;
  event: string;
  image: string;

  align: "left" | "right";
}

export default function Agenda2() {
  const agenda: AgendaItem[] = [
    { time: "3:00 PM", event: "Guest Arrival", image: "./image/car.png", align: "left" },
    { time: "4:00 PM", event: "Wedding Ceremony", image: "./image/ring.png", align: "right" },
    { time: "5:30 PM", event: "Cocktail Hour", image: "./image/cake.png", align: "left" },
    { time: "7:00 PM", event: "Dinner Reception", image: "./image/photo.png", align: "right" },
    { time: "9:00 PM", event: "Dancing & Party", image: "./image/dinner.png", align: "left" },
    { time: "10:00 PM", event: "Music Show", image: "./image/music.png", align: "right" },
    { time: "11:00 PM", event: "Dance Party", image: "./image/dance.png", align: "left" },
    { time: "12:00 AM", event: "After Party", image: "./image/party.png", align: "right" },
  ];

  const imageWidth = 50;
  const imageHeight = 50;
  const distanceFromLine = 50;
  const sectionSpacing = 60;

  const itemRefs = useRef<HTMLDivElement[]>([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  itemRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    itemRefs.current.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
  };
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
        paddingTop: "150px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "2.5rem",
        }}
      >
        Wedding Agenda
      </h1>

      {/* Center line */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          bottom: "10%",
          left: "50%",
          width: "0.5px",
          backgroundColor: "black",
          transform: "translateX(-50%)",
        }}
      />

      {/* Timeline events */}
      <div style={{ position: "relative" }}>
        {agenda.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el!)}
            data-index={index}
className={`timeline-item ${item.align}`}
            style={{
              position: "relative",
              marginTop: `${sectionSpacing}px`,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Left aligned */}
            {item.align === "left" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "absolute",
                  right: `calc(50% + ${distanceFromLine}px)`,
                  textAlign: "center",
                  transform: "translateY(-80%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    right: `-${distanceFromLine}px`,
                    width: `${distanceFromLine}px`,
                    height: "0.5px",
                    backgroundColor: "black",
                  }}
                />
                <img
                  src={item.image}
                  alt={item.event}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    objectFit: "contain",
                    marginBottom: "5px",
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black" }}>{item.time}</p>
                  <p style={{ margin: 0, color: "black", fontSize: "12px" }}>{item.event}</p>
                </div>
              </div>
            )}

            {/* Right aligned */}
            {item.align === "right" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "absolute",
                  left: `calc(50% + ${distanceFromLine}px)`,
                  textAlign: "center",
                                      transform: "translateY(-80%)",

                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "25px",
                    left: `-${distanceFromLine}px`,
                    width: `${distanceFromLine}px`,
                    height: "0.5px",
                    backgroundColor: "black",

                  }}
                />
                <img
                  src={item.image}
                  alt={item.event}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    objectFit: "contain",
                    marginBottom: "5px",
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "bold", color: "black" }}>{item.time}</p>
                  <p style={{ margin: 0, color: "black", fontSize: "12px" }}>{item.event}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
