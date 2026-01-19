"use client"; // Make this a 'client component' (gets executed on client side) instead of on the server natively (server component)

import Image from "next/image";
import Tab from "./components/Tab";
import ScotchedPhoto from "./components/ScotchedPhoto";
import StickerLabel from "./components/StickerLabel";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (tabName: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (activeTab === tabName) {
      setAnimationClass("animate-put-back");
      setActiveTab(null);
    } else {
      if (activeTab) {
        setAnimationClass("animate-put-back");
        setTimeout(() => {
          setActiveTab(tabName);
          setAnimationClass("animate-pull-over");
        }, 800);
      } else {
        setActiveTab(tabName);
        setAnimationClass("animate-pull-over");
      }
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    // The screen is the positioning context for our centered div.
    <div className="relative h-screen bg-zinc-50 dark:bg-stone-600">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[80vw] h-[60vw] max-w-[106.67vh] max-h-[80vh]">
        {/* Tabs over the folder */}
        <nav className="absolute w-2/3 h-1/6 right-0 z-30 -translate-y-2/3 lg:-translate-y-1/2">
          <ul className="flex w-full h-full gap-x-1">
            <Tab bgColor="bg-emerald-500" text="About" onClick={() => handleTabClick("About")} />
            <Tab bgColor="bg-blue-400" text="Skills" onClick={() => handleTabClick("Skills")} />
            <Tab bgColor="bg-red-400" text="Projects" onClick={() => handleTabClick("Projects")} />
            <Tab bgColor="bg-amber-400" text="Contact" onClick={() => handleTabClick("Contact")} />
          </ul>
        </nav>
        {/* Back of the folder */}
        <div className="absolute inset-0 z-10 origin-bottom skew-x-3 w-full rounded-lg bg-orange-200 p-4 mt-1 shadow-lg"></div>
        {/* Document Inside of the folder */}
        <div className={`absolute inset-0 z-20 w-full rounded-b-lg bg-white p-4 mt-6 shadow-lg text-black ${animationClass}`}>
          {activeTab === "About" && (
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="mt-4">C'est le contenu de la section "À propos".</p>
            </div>
          )}
          {activeTab === "Skills" && (
            <div>
              <h2 className="text-2xl font-bold">My Skills</h2>
              <p className="mt-4">Voici quelques-unes de mes compétences...</p>
            </div>
          )}
          {activeTab === "Projects" && (
            <div>
              <h2 className="text-2xl font-bold">My Projects</h2>
              <p className="mt-4">Découvrez mes projets ici...</p>
            </div>
          )}
          {activeTab === "Contact" && (
            <div>
              <h2 className="text-2xl font-bold">Contact Me</h2>
              <p className="mt-4">Contactez-moi via ce formulaire...</p>
            </div>
          )}
        </div>
        {/* Front of the folder */}
        <div className=" absolute inset-0 z-40 origin-bottom -skew-x-3 w-full rounded-lg bg-orange-200 p-4 shadow-lg">
          <StickerLabel text="Barth's Stuff" containerClassName=" -rotate-9 translate-y-1/2" />

          <ScotchedPhoto
            image={{ src: "/photo4.jpeg", width: 300, height: 300, alt: "Photo of Author" }}
            containerClassName=" w-1/2 translate-y-1/3 translate-x-3/4 skew-x-3 rotate-12"
          />

          <Image
            src="/label.png"
            width="300"
            height="300"
            alt="photo1"
            className="absolute w-1/2 -left-5 bottom-6 skew-x-3 -rotate-12"
          />
        </div>
      </div>
    </div>
  );
}
