import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { translations } from "./translations";

interface WeddingLocationProps {
  language: "en" | "lao";
}

export default function WeddingLocation({ language }: WeddingLocationProps) {
  const lang = language in translations ? language : "en";

  return (
    <div
      className="text-center mb-5"
      style={{         fontFamily: "Open Sans, Noto Sans Lao",
 padding: "1rem" }}
    >
      {/* Heading */}
      <h1
        className="magic-title mb-3"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "600" }}
      >
        {translations[lang].weddingTitle}
      </h1>

      {/* Address */}
      <p
        className="text-gray-600"
        style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.5 }}
      >
        {translations[lang].Addrees}
      </p>

      {/* Image */}
      <div
        className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden"
        style={{ maxWidth: "85%", minWidth: "200px" }}
      >
        <img
          src="./image/home.jpeg"
          alt="wedding-location"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Button with Icon */}
      <div className="mt-5">
        <a
        href="https://maps.app.goo.gl/6R6pUvvTyGchZi9y9"
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
    maxWidth: "380px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
>
        
          <FmdGoodOutlinedIcon fontSize="small" />
  {translations[lang].openweddingvanue}
        </a>
      </div>
    </div>
  );
}
