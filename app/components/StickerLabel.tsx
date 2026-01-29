// app/components/StickerLabel.tsx

interface StickerLabelProps {
  text: string;
  containerClassName?: string;
}

const StickerLabel: React.FC<StickerLabelProps> = ({ text, containerClassName }) => {
  return (
    <div
      className={`${containerClassName || ""} absolute m-[1.2vw] bg-white text-gray-800 p-2 rounded-lg [@media(max-height:450px)]:py-[1vh] [@media(max-height:450px)]:m-[1vh] `}>
      <p className={`font-permanent -rotate-3 text-[3vw] md:text-2xl lg:text-3xl [@media(max-height:450px)]:text-base`}>{text}</p>
      {/* <div className='absolute before:content-[""] top-0 right-0 border-[0.8vw] border-solid border-t-orange-200 border-r-orange-200 border-b-white border-l-white block w-0 shadow-r-' /> */}
    </div>
  );
};

export default StickerLabel;
