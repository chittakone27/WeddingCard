import { useState, useEffect } from "react";
import './App.css';

interface Flake {
  id: number;
  top: string;
  left: string;
  size: string;
  opacity: number;
  src: string;
}

export default function Snowflakes() {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  // Array of snow image paths
  const snowImages = [
    "./image/snow.gif",
    "./image/snowflake.gif",
    "./image/snow3.gif",
  ];
 // Maximum number of visible flakes
  const maxVisible = 20;
  let nextId = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setFlakes(prev => {
        let updated = [...prev];

        // Remove oldest if already at max
        if (updated.length >= maxVisible) {
          updated.shift();
        }

        // Add a new flake at random position
        const newFlake: Flake = {
          id: nextId++,
          top: `${Math.random() * 100}%`,  // top max 15%
          left: `${Math.random() * 100}%`,
          size: `${15 + Math.random() * 35}px`,
          opacity: 0,
          src: snowImages[Math.floor(Math.random() * snowImages.length)]
        };

        updated.push(newFlake);

        // Fade-in after adding
        setTimeout(() => {
          setFlakes(current =>
            current.map(flake =>
              flake.id === newFlake.id ? { ...flake, opacity: 1 } : flake
            )
          );
        }, 50);

        return updated;
      });
    }, 1000); // new flake every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flakes.map(flake => (
        <img
          key={flake.id}
          src={flake.src}
          className="snowflake"
          style={{
            top: flake.top,
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
          alt="❄"
        />
      ))}
    </>
  );
}