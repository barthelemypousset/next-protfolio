"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface ScotchedPhotoProps {
  image: ImageProps;
  containerClassName?: string;
}

const ScotchedPhoto: React.FC<ScotchedPhotoProps> = ({ image, containerClassName }) => {
  const [clickedScotches, setClickedScotches] = useState(new Set<number>());
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    if (clickedScotches.size === 2) {
      // Add a small delay for the user to see the second click before it falls
      const timer = setTimeout(() => setIsFalling(true), 100);
      return () => clearTimeout(timer);
    }
  }, [clickedScotches]);

  const handleScotchClick = (scotchId: number) => {
    // Avoid re-adding if already clicked, and do nothing if it's already falling
    if (isFalling || clickedScotches.has(scotchId)) return;
    setClickedScotches(prev => new Set(prev).add(scotchId));
  };

  const fallAnimationClasses = isFalling
    ? "transition-all duration-[2000ms] ease-in transform translate-y-[200vh] rotate-[30deg]"
    : "";

  return (
    <div className={`${containerClassName || ""} absolute ${fallAnimationClasses}`}>
      <Image {...image} alt="Phicture of the webmaster" className="w-full border-8 border-white" />
      <div
        onClick={() => handleScotchClick(1)}
        className={`absolute bottom-0 -left-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm cursor-pointer transition-opacity duration-300 ${
          clickedScotches.has(1) ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        onClick={() => handleScotchClick(2)}
        className={`absolute top-0 -right-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm cursor-pointer transition-opacity duration-300 ${
          clickedScotches.has(2) ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ScotchedPhoto;
