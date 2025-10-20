import React from "react";

const TEST_IMAGE_ID = "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj"; // Replace with your image ID

const TestImage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Test Image</h2>
      <img
        src={`https://drive.google.com/uc?export=view&id=${TEST_IMAGE_ID}`}
        alt="Test Wedding Photo"
        style={{ width: "300px", height: "auto", borderRadius: "12px" }}
        onLoad={() => console.log("✅ Image loaded")}
        onError={() => console.log("❌ Image failed to load")}
      />
    </div>
  );
};

export default TestImage;
