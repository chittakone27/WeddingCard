import React from "react";

const imageIds: string[] = [
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  "1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj",
  // Add more IDs as needed
];

const WeddingAlbum: React.FC = () => {
  return (
    <div style={styles.albumContainer as React.CSSProperties}>
      {imageIds.map((id, index) => (
        <div
          key={index}
          style={styles.imageContainer as React.CSSProperties}
          className="hover:scale-105 transition-transform duration-300"
        >
          <img
            src={`https://drive.google.com/uc?export=view&id=${id}`}
            alt={`Wedding Photo ${index + 1}`}
            style={styles.image as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  albumContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
    padding: "20px",
    justifyItems: "center",
  },
  imageContainer: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(232, 32, 132, 0.2)",
    transition: "transform 0.3s ease",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },
};

export default WeddingAlbum;
