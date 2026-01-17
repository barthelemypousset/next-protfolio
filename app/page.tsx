import Image from "next/image";
import Tab from "./components/Tab";
import SuccesLabel from "./components/succesLabel";

import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export default function Home() {
  return (
    // The screen is the positioning context for our centered div.
    <div className="relative h-screen bg-zinc-50 dark:bg-stone-600">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[80vw] h-[60vw] max-w-[106.67vh] max-h-[80vh] ">
        {/* Tabs over the folder */}
        <nav className="absolute w-2/3 h-1/6 right-0 z-2 -translate-y-2/3 lg:-translate-y-1/2 ">
          <ul className="flex w-full h-full gap-x-1">
            <Tab href="#" bgColor="bg-emerald-500" text="About" />
            <Tab href="#" bgColor="bg-blue-400" text="Skills" />
            <Tab href="#" bgColor="bg-red-400" text="Projects" />
            <Tab href="#" bgColor="bg-amber-400" text="Contact" />
          </ul>
        </nav>
        {/* Back of the folder */}
        <div className="absolute inset-0 z-1 origin-bottom skew-x-3 w-full rounded-lg bg-orange-200 p-4 mt-1 shadow-lg"></div>
        {/* Document Inside of the folder */}
        <div className="absolute inset-0 z-2 w-full rounded-b-lg bg-white p-4 mt-6 shadow-lg"></div>
        {/* Front of the folder */}
        <div className=" absolute inset-0 z-3 origin-bottom -skew-x-3 w-full rounded-lg bg-orange-200 p-4 shadow-lg">

          {/* Barth's stuff sticker */}
          <div className="absolute m-[1.2vw] -rotate-9 bg-white text-gray-800 p-2 rounded-lg">
            <p className={`${permanentMarker.className} -rotate-3 text-[3vw] md:text-2xl lg:text-3xl`}>Barth's Stuff</p>
            {/* <div className='absolute before:content-[""] top-0 right-0 border-[0.8vw] border-solid border-t-orange-200 border-r-orange-200 border-b-white border-l-white block w-0 shadow-r-' /> */}
          </div>

          {/* Photo and scotch pieces */}
          <div className="absolute w-1/2 translate-y-1/2 translate-x-3/4 skew-x-3 rotate-12">
            <Image src="/photo4.jpg" width="300" height="300" alt="photo1" className="w-full border-8 border-white" />
            <div className="absolute bottom-0 -left-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm" />
            <div className="absolute top-0 -right-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm" />
          </div>
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
