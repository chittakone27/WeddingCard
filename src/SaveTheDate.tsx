import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const WEDDING_DATE = new Date('2025-12-20T00:00:00'); // <-- export it

function calculateTimeLeft() {
  const now = new Date();
  const difference = WEDDING_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("./image/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "115px",
      }}
    >
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="mb-4">Save the Date!</h2>

        {/* Calendar-style card */}
        <div className="bg-light border rounded shadow d-inline-block p-4 mb-4">
          <div className="text-uppercase fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>
            December
          </div>
          <div className="display-4 fw-bold" style={{ fontSize: '4rem', lineHeight: '1' }}>
            20
          </div>
          <div className="text-muted">Saturday, 2025</div>
        </div>

        {/* Countdown Timer */}
        {timeLeft ? (
          <div className="mt-4">
            <h5 className="mb-3">Countdown to the Big Day</h5>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <CountdownBox label="Days" value={timeLeft.days} />
              <CountdownBox label="Hours" value={timeLeft.hours} />
              <CountdownBox label="Minutes" value={timeLeft.minutes} />
              <CountdownBox label="Seconds" value={timeLeft.seconds} />
            </div>
          </div>
        ) : (
          <p className="mt-4 text-success fw-bold">It's the big day! 🎉</p>
        )}
      </motion.div>
    </div>
  );
}

function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="border rounded p-2 bg-white shadow-sm" style={{ minWidth: 70 }}>
        <div className="fs-4 fw-bold">{value.toString().padStart(2, '0')}</div>
        <div className="small text-muted">{label}</div>
      </div>
    </div>
  );
}
