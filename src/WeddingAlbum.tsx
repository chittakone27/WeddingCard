import React from "react";
import { motion } from "framer-motion";

const TestImage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0",
      }}
    >
      {/* HEADER: slide up every time in view */}
      <motion.img
        src="./image/header.png"
        alt="Wedding Header"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // animate every time, trigger when 30% visible
        style={{
          width: "clamp(180px, 50%, 380px)",
          height: "auto",
          marginBottom: "2rem",
          objectFit: "contain",
        }}
      />

      {/* ALBUM PHOTO: fade + zoom every time in view */}
      <motion.img
        src="./image/album.jpg"
        alt="Test Wedding Photo"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // animate every time
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default TestImage;
