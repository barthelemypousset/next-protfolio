//Todo:
// - push new component Timeline
// - cut each tab content in a separate page or component
// - Finish the about page

"use client"; // Make this a 'client component' (gets executed on client side) instead of on the server natively (server component)

import Image from "next/image";
import Tab from "./components/Tab";
import ScotchedPhoto from "./components/ScotchedPhoto";
import StickerLabel from "./components/StickerLabel";

import { useState, useEffect } from "react";
import Card from "./components/Card";

import { Wallpaper, Server, TabletSmartphone, Database } from "lucide-react";
import { Timeline, TimelineItem } from "./components/Timeline";

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
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[80vw] h-[60vw] max-w-[106.67vh] max-h-[80vh] z-100 border-debug">
        {/* Tabs over the folder */}
        <nav className="absolute w-2/3 h-1/6 right-0 z-20 -translate-y-2/3 lg:-translate-y-1/2">
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
        <div
          className={`absolute inset-x-0 bottom-0 top-6 z-20 w-full rounded-b-lg bg-lined-paper p-4 shadow-lg text-black overflow-y-auto ${animationClass}`}>
          {activeTab === "About" && (
            <div>
              <div className="flex justify-evenly items-center rounded-lg p-3">
                <div className="">
                  <h2 className="mb-4 text-xl font-permanent">Who am I ?</h2>
                  <p className="text-3xl">Barthélémy POUSSET</p>
                  <p className="text-2xl">Fullstack Developer - Ex Devops</p>
                </div>
                <div>
                  <Image
                    className="w-full rounded-full"
                    src="/profil.jpeg"
                    alt="Photo of the author"
                    width="300"
                    height="150"
                  />
                </div>
              </div>
              <div className="p-4 m-4 border-2 rounded-2xl border-stone-300">
                <h2 className="mb-4 text-2xl font-permanent">Presentation</h2>
                <p className="text-justify">
                  After a 7-year career as a <b>DevOps Engineer</b>, I decided to pivot towards the world of{" "}
                  <b>application development</b> with a sensibility for pretty and efficient user interface. <br />
                  <br />I recently completed a Bachelor in Web & Mobile Development, focusing on the{" "}
                  <b>React ecosystem</b>. My goal is to leverage my infrastructure knowledge to build robust and
                  scalable mobile applications. <br />
                  <br />I also emphasize self-training, I like to discover new tools and keep up to date with IT trends
                  and news.
                </p>
              </div>
              <div className="p-4 m-4 border-2 rounded-2xl border-stone-300">
                <h2 className="mb-4 text-2xl font-permanent">My Journey</h2>
                <Timeline>
                  <TimelineItem date="September 2023 - September 2024">
                    <Card
                      title="Bachelor - Designer and Developer of Web and Mobile applications"
                      icon={<Image src="/swisslife.jpeg" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 6) Bootcamp done with LaCapsule"
                      elements={["Backend Developpement", "Frontend Developpement", "Mobile Developement"]}
                      iconColor="bg-white"
                    />
                  </TimelineItem>
                  <TimelineItem date="January 2017 - August 2023">
                    <Card
                      title="Master - Devops and Cloud Engineer"
                      icon={<Image src="/cleverconnect.jpeg" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 7) Formation done with YNOV"
                      elements={["Cloud administration", "CI/CD automation", "Devops Methodology"]}
                      iconColor="bg-white"
                    />
                  </TimelineItem>
                  <TimelineItem date="2015 - 2017">
                    <Card
                      title="Bachelor - Network and Datacenter Administrator"
                      icon={<Image src="/decathlon.jpeg" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 6) Formation done with CESI"
                      elements={["Datacenter administration", "network administration", "Infrastructure maintenance"]}
                      iconColor="bg-white"
                    />
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          )}
          {activeTab === "Skills" && (
            <div>
              <div className=" text-center p-3">
                <h2 className="text-2xl font-permanent">Skills and Education</h2>
                <p className="">Double diploma in Software Development an Devops Enginering</p>
              </div>

              <hr className="h-px m-6 bg-neutral-quaternary" />

              <div className="skills-shit p-4 m-4 border-2 rounded-2xl border-stone-300">
                <h2 className="pb-4 text-2xl font-permanent">My Skills</h2>
                <div className="lg:grid lg:grid-cols-2">
                  <Card
                    title="Frontend Development"
                    icon={<Wallpaper size={24} strokeWidth={1.75} color="#ffffff" />}
                    elements={["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Redux"]}
                    iconColor="bg-blue-400"
                  />
                  <Card
                    title="Backend Development"
                    icon={<Server size={24} strokeWidth={1.75} color="#ffffff" />}
                    elements={["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Rest API"]}
                    iconColor="bg-emerald-500"
                  />
                  <Card
                    title="Mobile Development"
                    icon={<TabletSmartphone size={24} strokeWidth={1.75} color="#ffffff" />}
                    elements={["React native", "Expo", "Flutter"]}
                    iconColor="bg-pink-500"
                  />
                  <Card
                    title="Devops Enginering"
                    icon={<Database size={24} strokeWidth={1.75} color="#ffffff" />}
                    elements={["Linux", "Shell scripting", "Python Scripting", "AWS", "Docker", "Terraform", "Ansible"]}
                    iconColor="bg-amber-500"
                  />
                </div>
              </div>

              <hr className="h-px m-10 bg-neutral-quaternary" />

              <div className="Education-shit p-4 m-4 border-2 rounded-2xl border-stone-300">
                <h2 className="pb-4 text-2xl font-permanent">My Education</h2>
                <ol className="relative ml-4 border-s-2 border-blue-400 border-default">
                  <li className="mb-10 ">
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 " />
                    <Card
                      title="Bachelor - Designer and Developer of Web and Mobile applications"
                      icon={<Image src="/lacapsule.png" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 6) Bootcamp done with LaCapsule"
                      elements={["Backend Developpement", "Frontend Developpement", "Mobile Developement"]}
                      iconColor="bg-white"
                    />
                  </li>
                  <li className="mb-10">
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5" />
                    <Card
                      title="Master - Devops and Cloud Engineer"
                      icon={<Image src="/ynov.png" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 7) Formation done with YNOV"
                      elements={["Cloud administration", "CI/CD automation", "Devops Methodology"]}
                      iconColor="bg-white"
                    />
                  </li>
                  <li className="mb-10">
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 " />
                    <Card
                      title="Bachelor - Network and Datacenter Administrator"
                      icon={<Image src="/cesi.png" width={100} height={100} alt="logo lacapsule" />}
                      text="(EQF level 6) Formation done with CESI"
                      elements={["Datacenter administration", "network administration", "Infrastructure maintenance"]}
                      iconColor="bg-white"
                    />
                  </li>
                </ol>
              </div>
            </div>
          )}
          {activeTab === "Projects" && (
            <div>
              <div className="flex justify-evenly items-center rounded-lg p-3 bg-white">
                <div className="">
                  <h2 className="text-2xl font-bold">What are the projects ?</h2>
                  <p className="">Here you can find a bunch of cool projects I've built with my own hands !</p>
                </div>
                <div>
                  <Image
                    className="w-full rounded-full"
                    src="/profil.jpeg"
                    alt="Photo of the author"
                    width="300"
                    height="150"
                  />
                </div>
              </div>
              <div className="mt-4 rounded-lg p-3 bg-white">
                <h2 className="text-2xl font-bold">My skills</h2>
                <div>
                  <h3>Frontend</h3>
                  <p>bla bla bla</p>
                </div>
                <div>
                  <h3>Mobile</h3>
                  <p>bla bla bla</p>
                </div>
                <div>
                  <h3>Backend</h3>
                  <p>bla bla bla</p>
                </div>
                <div>
                  <h3>Devops</h3>
                  <p>bla bla bla</p>
                </div>
              </div>
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
        <div className="absolute inset-0 z-40 origin-bottom -skew-x-3 w-full rounded-lg bg-orange-200 p-4 shadow-lg">
          <StickerLabel text="Barth's Stuff" containerClassName=" -rotate-9 translate-y-1/2" />

          <ScotchedPhoto
            image={{ src: "/photo4.jpeg", width: 300, height: 300, alt: "Photo of Author" }}
            containerClassName=" w-1/2 translate-y-1/3 translate-x-3/4 skew-x-3 rotate-12"
          />

          <Image
            src="/label.png"
            width="300"
            height="150"
            alt="Photo of the author"
            className="absolute w-1/2 -left-5 bottom-6 skew-x-3 -rotate-12"
          />
        </div>
        <p className="absolute -bottom-10 left-0 right-0 text-center text-black">
          Barthélémy POUSSET 2026 - Github - LinkedIn{" "}
        </p>
      </div>
    </div>
  );
}
