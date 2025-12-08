import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { translations } from "./translations";

interface BrideSectionProps {
  imageUrl: string;
  name: string;
  facebookUrl?: string;
  instagramUrl?: string;
  language: "en" | "lao";
}

const BrideSection: React.FC<BrideSectionProps> = ({
  imageUrl,
  name,
  facebookUrl,
  instagramUrl,
  language,
}) => {
    const [loading, setLoading] = useState(true);

  const lang = language in translations ? language : "en";

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff0f5", // soft pink tone
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Parisienne, Noto Sans Lao",
        padding: "40px 0 40px 0",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "3rem",
          color: "#040404ff",
          zIndex: 10,
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {translations[lang].bride}
      </h2>

      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
<img
  src={imageUrl}
  alt={name}
  style={{
    width: "100%",
    height: "auto",
    filter: loading ? "blur(20px)" : "none",
    transition: "filter 0.3s ease",
  }}
  onLoad={() => setLoading(false)}
/>


      </div>

      {/* Name + Icons */}
      <div
        style={{
          textAlign: "center",
          marginTop: "0.5rem", // brings text closer to image
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "#000",
            fontFamily: "Open Sans, Noto Sans Lao",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </p>
                <p
          style={{
            fontSize: "24px",
            color: "#000",
            fontFamily: "Open Sans, Noto Sans Lao",
            marginBottom: "0.5rem",
          }}
        >
{translations[lang].jaeng2}        </p>


        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3b5998",
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaFacebook />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#C13584",
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrideSection;
