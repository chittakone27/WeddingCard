import { useState } from "react";
import Carpark from "./carpark";
import WeddingLocation from "./Location";

export default function LocationTabs() {
  const [activeTab, setActiveTab] = useState("carpark");

  return (
      <div
      className="container my-5"
      style={{
        backgroundImage: 'url("./image/background.png")', // 👈 add your image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
    <div className="text-center mb-10" style={{ fontFamily: "boonhome" }}>
      {/* Tab Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          <button
            onClick={() => setActiveTab("carpark")}
            className="btn px-4 py-2 fw-semibold"
            style={{
              borderRadius: "20px 0 0 20px",
              backgroundColor:
                activeTab === "carpark" ? "rgba(0,204,204,1)" : "transparent",
              color: activeTab === "carpark" ? "#fff" : "#6c757d",
              border:
                activeTab === "carpark"
                  ? "1px solid rgba(0,204,204,1)"
                  : "1px solid rgba(0,204,204,0.5)",
              boxShadow:
                activeTab === "carpark" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
            }}
          >
            ບ່ອນຈອດລົດ
          </button>

          <button
            onClick={() => setActiveTab("wedding")}
            className="btn px-4 py-2 fw-semibold"
            style={{
              borderRadius: "0 20px 20px 0",
              backgroundColor:
                activeTab === "wedding" ? "rgba(0,204,204,1)" : "transparent",
              color: activeTab === "wedding" ? "#fff" : "#6c757d",
              border:
                activeTab === "wedding"
                  ? "1px solid rgba(0,204,204,1)"
                  : "1px solid rgba(0,204,204,0.5)",
              boxShadow:
                activeTab === "wedding" ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
            }}
          >
            ສະຖານທີ່ຈັດງານ
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div
      
      >
        {activeTab === "carpark" && <Carpark />}
        {activeTab === "wedding" && <WeddingLocation />}
      </div>
    </div>
    </div>
  );
}
