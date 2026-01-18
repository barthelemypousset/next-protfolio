// app/components/StickerLabel.tsx

import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

interface StickerLabelProps {
  text: string;
  containerClassName?: string;
}

const StickerLabel: React.FC<StickerLabelProps> = ({ text, containerClassName }) => {
  return (
    <div className={`${containerClassName || ""} absolute m-[1.2vw] bg-white text-gray-800 p-2 rounded-lg`}>
      <p className={`${permanentMarker.className} -rotate-3 text-[3vw] md:text-2xl lg:text-3xl`}>{text}</p>
      {/* <div className='absolute before:content-[""] top-0 right-0 border-[0.8vw] border-solid border-t-orange-200 border-r-orange-200 border-b-white border-l-white block w-0 shadow-r-' /> */}
    </div>
  );
};

export default StickerLabel;
