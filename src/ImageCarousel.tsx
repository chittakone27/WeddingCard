import { useEffect, useRef, useState } from 'react';
// import './App.css'; // CSS สำหรับ animation
declare global {
  interface Window {
    bootstrap: any;
  }
}

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
];

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // แสดง animation เมื่อ page โหลด
    const timer = setTimeout(() => setVisible(true), 100); // delay นิดหน่อย
    return () => clearTimeout(timer);
  }, []);

 useEffect(() => {
  if (carouselRef.current && window.bootstrap) {
    const carousel = new window.bootstrap.Carousel(carouselRef.current, {
      interval: 500, // 1 second
      ride: 'carousel',
      pause: false,   // don't stop on hover
      wrap: true,
    });
    carousel.cycle();
  }
}, []);

  return (
    // <div
    //   className="container my-5"
    //   style={{
    //     backgroundImage: 'url("./image/background.png")', // 👈 add your image here
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     padding: '20px',
    //     borderRadius: '10px',
    //   }}
    // >
<div
  id="weddingCarousel"
  className={`carousel slide ${visible ? "fade-slide-in" : "fade-slide-out"}`}

style={{ maxWidth: "100%", height: "400px" , color:"black"}}
  ref={carouselRef}
  data-bs-ride="carousel"
>
  <div className="carousel-inner" style={{ height: "100%" }}>
    {images.map((src, idx) => (
      <div
        key={idx}
        className={`carousel-item ${idx === 0 ? "active" : ""}`}
        style={{ height: "100%",width: "100%", }}
      >
        <img
          src={src}
          alt={`Slide ${idx + 1}`}
          style={{ height: "100%",  objectFit: "cover" }}
        />
      </div>
    ))}
  </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#weddingCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#weddingCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  // </div>
);

}
