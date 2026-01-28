// app/components/TiltScreenModal.tsx
"use client";

import { useState, useEffect } from "react";

const TiltScreenModal = () => {
  const [isTooNarrow, setIsTooNarrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTooNarrow(window.innerWidth < 500);
    };

    // Set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isTooNarrow) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-90 text-white md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-24 h-24 mx-auto mb-4 animate-pulse">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
      <p className="text-xl font-semibold text-center">
        Please rotate your device or widen your screen <br /> for the best experience.
      </p>
    </div>
  );
};

export default TiltScreenModal;
