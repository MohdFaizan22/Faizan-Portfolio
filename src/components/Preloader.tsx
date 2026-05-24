import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          setHide(true);
          setTimeout(onDone, 600);
        }, 400);
      }
      setProgress(Math.floor(p));
    }, 80);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500"
      style={{ opacity: hide ? 0 : 1, pointerEvents: hide ? "none" : "auto" }}
    >
      <h1
        className="font-display text-white uppercase whitespace-nowrap text-left font-sans text-7xl md:text-9xl fill-text"
        data-text="FAIZAN"
        style={{ ["--fill" as never]: `${progress}%` }}
      >
        FAIZAN
      </h1>
      <p className="mt-6 text-xs tracking-widest text-white/80 uppercase">
        loading... {String(progress).padStart(2, "0")} %
      </p>
    </div>
  );
}
