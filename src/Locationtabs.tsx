import { useState } from "react";
import Carpark from "./carpark";
import WeddingLocation from "./Location";
import { translations } from "./translations";

interface LocationTabsProps {
  language: "en" | "lao";
}

export default function LocationTabs({ language }: LocationTabsProps) {
  const [activeTab, setActiveTab] = useState("carpark");
  const lang = language in translations ? language : "en";

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "115px",
      }}
    >
      <div className="text-center mb-10" style={{ fontFamily: "Open Sans, Noto Sans Lao" }}>
        {/* === Tab Buttons === */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            {/* Carpark Button */}
            <button
              onClick={() => setActiveTab("carpark")}
              className="btn px-4 py-2 fw-semibold"
              style={{
                borderRadius: "20px 0 0 20px",
                backgroundColor:
                  activeTab === "carpark" ? "rgba(232, 32, 132, 1)" : "transparent",
                color: activeTab === "carpark" ? "#fff" : "#6c757d",
                border:
                  activeTab === "carpark"
                    ? "1px solid rgba(232, 32, 132, 1)"
                    : "1px solid rgba(255,105,180,0.5)",
                boxShadow:
                  activeTab === "carpark" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {translations[lang].carparkTitle}
            </button>

            {/* Wedding Button */}
            <button
              onClick={() => setActiveTab("wedding")}
              className="btn px-4 py-2 fw-semibold"
              style={{
                borderRadius: "0 20px 20px 0",
                backgroundColor:
                  activeTab === "wedding" ? "rgba(232, 32, 132, 1)" : "transparent",
                color: activeTab === "wedding" ? "#fff" : "#6c757d",
                border:
                  activeTab === "wedding"
                    ? "1px solid rgba(232, 32, 132, 1)"
                    : "1px solid rgba(255,105,180,0.5)",
                boxShadow:
                  activeTab === "wedding" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {translations[lang].weddingTitle}
            </button>
          </div>
        </div>

        {/* === Tab Content === */}
        <div>
          {activeTab === "carpark" && (
            <>
              {/* <h3
                className="mb-4 fw-bold"
                style={{
                  color: "#E82084",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                {translations[lang].carparkTitle || "Carpark Information"}
              </h3> */}
              <Carpark language={language} />
            </>
          )}

          {activeTab === "wedding" && (
            <>
              {/* <h3
                className="mb-4 fw-bold"
                style={{
                  color: "#E82084",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                {translations[lang].weddingTitle || "Wedding Location"}
              </h3> */}
              <WeddingLocation language={language} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
