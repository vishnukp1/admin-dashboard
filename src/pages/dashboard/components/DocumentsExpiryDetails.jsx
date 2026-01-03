import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOX } from '../../../assets';

const DocumentsExpiryDetails = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm flex flex-col relative w-full
      rounded-[10px] p-4 h-[12.5rem] 
      md:rounded-[24px] md:p-6 md:h-[18rem]
      min-[2560px]:rounded-[40px] min-[2560px]:p-8 min-[2560px]:h-[24.625rem]
    ">

      <div className="flex justify-between items-center 
        mb-4
        md:mb-6 
        min-[2560px]:mb-8
      ">
        <h2 className="leading-none text-[var(--color-black)]
          font-semibold text-[0.625rem]
          md:text-lg md:font-bold
          min-[2560px]:text-4xl min-[2560px]:font-bold
        ">
          Documents Expiry
        </h2>

        <button className="flex items-center justify-center rounded-full border border-gray-200 bg-white/50 hover:bg-white transition-colors
          w-6 h-6
          md:w-10 md:h-10
          min-[2560px]:w-12 min-[2560px]:h-12
        ">
          <ArrowUpRight className="text-gray-500
            w-3 h-3
            md:w-5 md:h-5
            min-[2560px]:w-[20px] min-[2560px]:h-[20px]
          " />
        </button>
      </div>

      <div className="grid grid-cols-4 border-b border-gray-200 
        gap-2 pb-2 mb-4
        md:gap-4 md:pb-4 md:mb-6
        min-[2560px]:gap-4 min-[2560px]:pb-4 min-[2560px]:mb-10
      ">
        {['Type', 'Name', 'Status', 'Detail'].map((header, index) => (
          <span
            key={index}
            className="leading-none text-[var(--color-black)]
              font-bold text-[0.3125rem]
              md:text-xs
              min-[2560px]:text-[15px]
            "
          >
            {header}
          </span>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center opacity-60">
        <div className="
          w-12 h-12 mb-2
          md:w-20 md:h-20 md:mb-4
          min-[2560px]:w-auto min-[2560px]:h-auto min-[2560px]:mb-0
        ">
          <img src={BOX} alt="box" className="w-full h-full object-contain" />
        </div>
        <div className="bg-gray-200 rounded-full
          h-1 w-10
          md:h-1.5 md:w-14
          min-[2560px]:h-2 min-[2560px]:w-16
        "></div>
      </div>
    </div>
  );
};

export default DocumentsExpiryDetails;