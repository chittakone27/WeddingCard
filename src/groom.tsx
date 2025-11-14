import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { translations } from "./translations";
import { motion } from "framer-motion";

interface GroomSectionProps {
  imageUrl: string;
  name: string;
  facebookUrl?: string;
  instagramUrl?: string;
  language: "en" | "lao";
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
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff0f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Parisienne, Noto Sans Lao",
        padding: "40px 0",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          fontSize: "3rem",
          color: "#040404ff",
          zIndex: 10,
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {translations[lang].groom}
      </motion.h2>

      {/* Image */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
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
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </motion.div>

      {/* Name + Icons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          textAlign: "center",
          marginTop: "0.5rem",
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
          {translations[lang].owen}
        </p>

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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default GroomSection;
