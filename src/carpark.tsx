import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function Carpark() {
  return (
    <div
      style={{
        fontFamily: "boonhome",
        borderRadius: "1rem",
        maxWidth: "100%",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1 className="magic-title mb-3"style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "600" }}
>
        ບ່ອນຈອດລົດ
      </h1>

      {/* Address */}
      <p className="text-gray-600" style={{ fontFamily: "boonhome", fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.5 }}>
        Ban Xamkhe, Xaysettha District, <br />
        Vientiane Capital, Laos
      </p>

      {/* Image */}
      <div
        className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden"
        style={{ maxWidth: "85%", minWidth: "200px" }}
      >
        <img
          src="./image/carpark.jpg"
          alt="carpark"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Button */}
      <div className="mt-5">
        <button
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/jARzuqZPJaJjqYz19",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="mx-auto d-flex align-items-center justify-content-center gap-2"
          style={{
            zIndex: 20,
            color: "white",
            background: "linear-gradient(135deg, rgba(232, 32, 132, 1), rgba(255, 105, 180, 1))",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            boxShadow: "0 4px 15px rgba(232, 32, 132, 0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          <FmdGoodOutlinedIcon fontSize="small" />
          Open in Google Maps
        </button>
      </div>
    </div>
  );
}
