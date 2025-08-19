import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="text-center mb-4" style={{ fontFamily: "boonhome" }}>
      <div className="d-flex justify-content-center">
        <div className="btn-group">
          {/* English (UK Flag) */}
          <button
            onClick={() => setLanguage("en")}
            className="btn d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
            style={{
              borderRadius: "20px 0 0 20px",
              backgroundColor:
                language === "en" ? "rgba(0,204,204,1)" : "transparent",
              color: language === "en" ? "#fff" : "#6c757d",
              border:
                language === "en"
                  ? "1px solid rgba(0,204,204,1)"
                  : "1px solid rgba(0,204,204,0.5)",
              boxShadow:
                language === "en" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              style={{
                width: "28px",
                height: "20px",
                borderRadius: "4px",
              }}
            />
            English
          </button>

          {/* Lao Flag */}
          <button
            onClick={() => setLanguage("lao")}
            className="btn d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
            style={{
              borderRadius: "0 20px 20px 0",
              backgroundColor:
                language === "lao" ? "rgba(0,204,204,1)" : "transparent",
              color: language === "lao" ? "#fff" : "#6c757d",
              border:
                language === "lao"
                  ? "1px solid rgba(0,204,204,1)"
                  : "1px solid rgba(0,204,204,0.5)",
              boxShadow:
                language === "lao" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src="https://flagcdn.com/w40/la.png"
              alt="Lao"
              style={{
                width: "28px",
                height: "20px",
                borderRadius: "4px",
              }}
            />
            ພາສາລາວ
          </button>
        </div>
      </div>
    </div>
  );
}
