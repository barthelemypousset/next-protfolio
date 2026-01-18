// app/components/ScotchedPhoto.tsx
import Image, { ImageProps } from "next/image";

interface ScotchedPhotoProps {
  image: ImageProps;
  containerClassName?: string;
}

const ScotchedPhoto: React.FC<ScotchedPhotoProps> = ({ image, containerClassName }) => {
  return (
    <div className={`${containerClassName || ""} absolute`}>
      <Image {...image} className="w-full border-8 border-white" />
      <div className="absolute bottom-0 -left-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm" />
      <div className="absolute top-0 -right-4 w-16 h-6 bg-white/50 transform rotate-45 backdrop-blur-sm" />
    </div>
  );
};

export default ScotchedPhoto;
