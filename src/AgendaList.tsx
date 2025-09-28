// AgendaList.tsx
import { useEffect, useState, useRef } from "react";
import { WEDDING_DATE } from "./SaveTheDate";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import './App.css'; // CSS สำหรับ animation

type EventKey = "weddingCeremony" | "lunchReception" | "photoSession" | "dinnerParty";

const agenda: { time: string; eventKey: EventKey }[] = [
  { time: "1:00", eventKey: "weddingCeremony" },
  { time: "1:09", eventKey: "lunchReception" },
  { time: "15:00", eventKey: "photoSession" },
  { time: "18:00", eventKey: "dinnerParty" },
];

function parseTimeToDate(timeStr: string) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const date = new Date(WEDDING_DATE);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

export default function AgendaList() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // อัพเดทเวลาปัจจุบันของ agenda
  useEffect(() => {
    const updateAgenda = () => {
      const now = new Date();
      let activeIndex: number | null = null;

      for (let i = 0; i < agenda.length; i++) {
        const eventTime = parseTimeToDate(agenda[i].time);
        if (now >= eventTime) activeIndex = i;
      }
      setCurrentIndex(activeIndex);
    };

    updateAgenda();
    const interval = setInterval(updateAgenda, 1000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer เพื่อเช็คว่า section ปรากฏบน viewport
// AgendaList.tsx (แก้เฉพาะส่วน useEffect ของ IntersectionObserver)
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting); // true เมื่อเข้ามา, false เมื่อออก
      });
    },
    { threshold: 0.3 } // 30% ของ section อยู่ใน viewport
  );

  if (containerRef.current) observer.observe(containerRef.current);
  return () => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };
}, []);


  return (
    <div
      className="container my-5"
      ref={containerRef}

      style={{
        backgroundImage: 'url("./image/background.png")', // 👈 add your image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
    {/* <div className="card mb-5" ref={containerRef} style={{minWidth: '300px', maxWidth: '600px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}> */}
      <div className="card-body">
        <h2 className="card-title text-center mb-4">
          {translations[language].agenda}
        </h2>

        <div className="text-center mb-4">
          {/* <img 
            // @ts-ignore
            src={`${import.meta.env.BASE_URL}image/marriage.gif`} 
            style={{ maxWidth: "120px", height: "auto" }} 
            alt="Wedding Animation" 
          /> */}
        </div>

        <ul className="list-group list-group-flush">
          {agenda.map((item, index) => {
            let status = translations[language].upcoming;
            let listClass =
              "list-group-item d-flex justify-content-between align-items-center slide-item";

            let textStyle: React.CSSProperties = {};

            if (currentIndex === index) {
              listClass += " active-gradient";
              status = translations[language].ongoing;
              textStyle = {
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ffffffff, #ff6ec7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "pulse 1.5s infinite",
              };
            } else if (currentIndex !== null && index < currentIndex) {
              listClass += " list-group-item-danger";
              status = translations[language].completed;
              textStyle = { textDecoration: "line-through", color: "#6c757d" };
            }

            return (
              <li
                key={index}
                className={`${listClass} ${visible ? "slide-in" : "slide-out"}`}
                style={{ transitionDelay: `${index * 0.2}s` }} // ไล่ delay
              >
                <div>
                  <strong>{item.time}</strong> -{" "}
                  <span style={textStyle}>{translations[language][item.eventKey]}</span>
                </div>
                <span className="text-muted fst-italic">{status}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
