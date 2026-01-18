import React from "react";

const SuccesLabel = () => {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Texte circulaire */}
      <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <defs>
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="text-[6px] uppercase fill-slate-600 font-bold tracking-[3px]">
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Fullstack Developer •
          </textPath>
        </text>
        <text className="text-[7px] uppercase fill-blue-600 font-bold tracking-[3px]">
          <textPath xlinkHref="#circlePath" startOffset="55%">
            7 Years DevOps •
          </textPath>
        </text>
      </svg>

      {/* Centre du tampon */}
      <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-double border-slate-800 rounded-full shadow-xl">
        <span className="text-xl font-black uppercase tracking-tighter text-slate-800 transform -rotate-12">
          Qualified
        </span>
      </div>
    </div>
  );
};

export default SuccesLabel;