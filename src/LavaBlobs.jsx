import { useEffect, useState } from "react";

export default function LavaBlobs({ count = 10 }) {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const newBlobs = Array.from({ length: count }).map(() => ({
      size: 80 + Math.random() * 120,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
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
            bottom: `-150px`,
            background: "radial-gradient(circle, #FFA500 0%, #FF4500 100%)",
            animation: `floatUp ${blob.duration}s linear ${blob.delay}s infinite`,
          }}
          className="absolute rounded"
        />
      ))}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }

          50%{
          opacity: 0;
          }
          90% {
            opacity: 1;
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
