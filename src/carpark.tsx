import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { translations } from "./translations";

interface CarparkProps {
  language: "en" | "lao";
}

export default function Carpark({ language }: CarparkProps) {
  const lang = language in translations ? language : "en";

  return (
    <div
      style={{
        fontFamily: "Open Sans, phetsarath OT",
        borderRadius: "1rem",
        maxWidth: "100%",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        className="magic-title mb-3"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "600" }}
      >
        {translations[lang].carparkTitle}
      </h1>

      {/* Address */}
      <p
        className="text-gray-600"
        style={{
          fontFamily: "boonhome",
          fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
          lineHeight: 1.5,
        }}
      >
        {translations[lang].Addreescarpark}
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

      {/* Location Button */}
      <div className="mt-5">
    <a
  href="https://maps.app.goo.gl/jARzuqZPJaJjqYz19"
  target="_blank"
  rel="noopener noreferrer"
  className="
    d-inline-flex 
    align-items-center 
    justify-content-center 
    gap-2 
    btn 
    btn-gradient 
    rounded-pill 
    shadow 
    px-4 
    py-2 
    fw-bold
  "
  style={{
    background: "rgba(232, 32, 132, 1)", // wedding theme gradient
    color: "#fff",
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    minWidth: "200px",
    maxWidth: "300px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    fontFamily: "Open Sans,phetsarath OT",
  }}
>
  <FmdGoodOutlinedIcon fontSize="small" />
  {translations[lang].opencarpark}
</a>

      </div>
    </div>
  );
}
