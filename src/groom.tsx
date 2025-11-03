import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { translations } from "./translations";

interface GroomSectionProps {
  imageUrl: string;
  name: string;
  facebookUrl?: string;
  instagramUrl?: string;
  language: "en" | "lao"; // Add language prop
}

const GroomSection: React.FC<GroomSectionProps> = ({
  imageUrl,
  name,
  facebookUrl,
  instagramUrl,
  language,
}) => {
  const lang = language in translations ? language : "en";

  return (
    <section
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#fff0f5", fontFamily: "Parisienne, Noto Sans Lao" }}
    >
      <div className="position-relative w-100 w-md-75 h-100 d-flex flex-column justify-content-between rounded shadow-lg overflow-hidden">
        {/* Groom Image */}
        <img
          src={imageUrl}
          alt={name}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ opacity: 0.9 }}
        />

        {/* Top Title */}
        <h2
          className="position-relative text-center fw-bold mt-3"
          style={{
            fontSize: "3rem",
            color: "#040404ff",
            zIndex: 10,
            backgroundColor: "rgba(203, 201, 202, 0.5)",
            display: "inline-block",
            padding: "0.2rem 0.6rem",
            borderRadius: "5px",
          }}
        >
          {translations[lang].groom}
        </h2>

        {/* Bottom Name + Social Links */}
        <div className="position-relative text-center mb-4" style={{ zIndex: 10 }}>
          <p
            className="fs-3 mb-3"
            style={{
              fontSize: "2rem",
              backgroundColor: "rgba(203, 201, 202, 0.5)",
              display: "inline-block",
              padding: "0.2rem 0.6rem",
              borderRadius: "5px",
              color: "#020202ff",
            }}
          >
            {name}
          </p>

          <div className="d-flex justify-content-center gap-4 mt-2">
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998", fontSize: "1.5rem" }}
              >
                <FaFacebook />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#C13584", fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomSection;
