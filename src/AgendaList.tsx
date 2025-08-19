import { useEffect, useState } from "react";
import { WEDDING_DATE } from "./SaveTheDate";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

type EventKey = "weddingCeremony" | "lunchReception" | "photoSession" | "dinnerParty";

const agenda: { time: string; eventKey: EventKey }[] = [
  { time: "10:00", eventKey: "weddingCeremony" },
  { time: "12:00", eventKey: "lunchReception" },
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

  return (
    <div className="card mb-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">
          {translations[language].agenda}
        </h2>

        <div className="text-center mb-4">
          <img
            src="/image/marriage.gif"
            style={{ maxWidth: "120px", height: "auto" }}
            alt="Wedding Animation"
          />
        </div>

        <ul className="list-group list-group-flush">
          {agenda.map((item, index) => {
            let status = translations[language].upcoming;
            let listClass =
              "list-group-item d-flex justify-content-between align-items-center";

            if (currentIndex === index) {
              listClass += " list-group-item-success";
              status = translations[language].ongoing;
            } else if (currentIndex !== null && index < currentIndex) {
              listClass += " list-group-item-danger";
              status = translations[language].completed;
            }

            return (
              <li key={index} className={listClass}>
                <div>
                  <strong>{item.time}</strong> -{" "}
                  <span>{translations[language][item.eventKey]}</span>
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
