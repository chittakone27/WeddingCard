import React from "react";
import { translations } from "./translations";
import { motion } from "framer-motion";

interface PaymentQRProps {
  language: "en" | "lao";
}

const PaymentQR: React.FC<PaymentQRProps> = ({ language }) => {
  const lang = language in translations ? language : "en";

  const qrList = [
    { src: "./image/dollar.jpg" },
    { src: "./image/bath.jpg" },
    { src: "./image/kip.jpg" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "2rem 1rem",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 600,
          marginBottom: "2rem",
          textAlign: "center",
          fontFamily: "Open Sans, Noto Sans Lao",
        }}
      >
        {translations[lang].paymentTitle}
      </motion.h2>

      {/* QR Code Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1000px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {qrList.map((qr, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ textAlign: "center" }}
          >
            <img
              src={qr.src}
              style={{
                width: "100%",
                maxWidth: "240px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PaymentQR;
