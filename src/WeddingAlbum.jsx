import React from 'react';

const imageIds = [
  '1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj',
  '1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj','1wq0yKwOf585UDtGbA5AIJIX8f9XnGVkj',

  // Add more IDs as needed
];

const WeddingAlbum = () => {
  return (
    <div style={styles.albumContainer}>
      {imageIds.map((id, index) => (
        <div key={index} style={styles.imageContainer}>
          <img
            src={`https://drive.google.com/uc?export=view&id=${id}`}
            alt={`Wedding Photo ${index + 1}`}
            style={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  albumContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    padding: '20px',
  },
  imageContainer: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
};

export default WeddingAlbum;
