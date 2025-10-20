import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const activePink = "rgba(232, 32, 132, 1)";
  const inactiveBorder = "rgba(255,105,180,0.5)";

  return (
    <div className="text-center mb-4" style={{ fontFamily: "phetsarath ot" }}>
      <div className="d-flex justify-content-center">
        <div className="btn-group">

          {/* English */}
          <button
            onClick={() => setLanguage("en")}
            className="btn d-flex align-items-center gap-2"
            style={{
              borderRadius: "20px 0 0 20px",
              backgroundColor: language === "en" ? activePink : "transparent",
              color: language === "en" ? "#fff" : "#6c757d",
              border: language === "en" ? `1px solid ${activePink}` : `1px solid ${inactiveBorder}`,
              boxShadow: language === "en" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
              transition: "all 0.3s ease",
              padding: "6px 14px", // perfect padding for mobile & desktop
              fontSize: "0.9rem", // readable text
              minWidth: "90px", // consistent button width
            }}
          >
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              style={{
                width: "24px", // slightly smaller for balance
                height: "16px",
                borderRadius: "3px",
              }}
            />
            English
          </button>

          {/* Lao */}
          <button
            onClick={() => setLanguage("lao")}
            className="btn d-flex align-items-center gap-2"
            style={{
              borderRadius: "0 20px 20px 0",
              backgroundColor: language === "lao" ? activePink : "transparent",
              color: language === "lao" ? "#fff" : "#6c757d",
              border: language === "lao" ? `1px solid ${activePink}` : `1px solid ${inactiveBorder}`,
              boxShadow: language === "lao" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
              transition: "all 0.3s ease",
              padding: "6px 14px",
              fontSize: "0.9rem",
              minWidth: "90px",
            }}
          >
            <img
              src="https://flagcdn.com/w40/la.png"
              alt="Lao"
              style={{
                width: "24px",
                height: "16px",
                borderRadius: "3px",
              }}
            />
            ພາສາລາວ
          </button>

        </div>
      </div>
    </div>
  );
}
