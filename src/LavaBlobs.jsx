import { useEffect, useState } from "react";

export default function LavaBlobs({ count = 10 }) {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const margin = 5; // % margin from screen edges
    const slice = (100 - margin * 2) / count; // width % per blob

    const newBlobs = Array.from({ length: count }).map((_, i) => ({
      size: 50 + Math.random() * 120,                         // blob size
      left: margin + i * slice + Math.random() * slice,       // evenly spread horizontal
      duration: 8 + Math.random() * 8,                        // animation duration
      startBottom: -50 + Math.random() * 20

    }));

    setBlobs(newBlobs);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.left}%`,
            bottom: `${blob.startBottom}px`,
            background: "radial-gradient(circle, #FFA500 0%, #FF4500 100%)",
            animation: `floatUp ${blob.duration}s linear infinite`,
          }}
          className="absolute rounded"
        />
      ))}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          30% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
            60% {
            opacity: .5;
          }

          100% {
            transform: translateY(-120vh);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
