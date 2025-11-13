import React from "react";

const TestImage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",          // responsive container
        maxWidth: "1200px",     // optional limit for large screens
        margin: "0 auto",       // center on desktop
        padding: "0",           // remove extra spacing
      }}
    >
         <img
        src="./image/header.png"
        alt="Wedding Header"
        style={{
          width: "clamp(180px, 50%, 380px)", // responsive scaling
          height: "auto",
          marginBottom: "2rem",
          objectFit: "contain",
        }}
      />
      <img
        src="./image/album.jpg"
        alt="Test Wedding Photo"
        style={{
          width: "100%",        // fills container width
          height: "auto",       // maintains aspect ratio
          display: "block",     // removes bottom whitespace
          borderRadius: "8px",  // optional: rounded corners
        }}
        onLoad={() => console.log("✅ Image loaded")}
        onError={() => console.log("❌ Image failed to load")}
      />
    </div>
  );
};

export default TestImage;
