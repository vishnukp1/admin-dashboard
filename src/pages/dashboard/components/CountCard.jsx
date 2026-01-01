import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const CountCard = ({ title, count, icon: Icon, iconBg }) => {
  return (
    <div className={`
      bg-[#4f46e5] text-white relative overflow-hidden shadow-xl flex flex-col justify-between 
      group hover:scale-[1.01] transition-transform duration-300
      
      /* Phone (Remains unchanged) */
      w-[4.84rem] h-[4.71rem] rounded-[10px] p-2
      
      /* Small Laptop (1024px to 1440px) */
      lg:w-full lg:h-[14rem] lg:rounded-[24px] lg:p-5
      
      /* Large Laptop / Desktop (1440px to 2560px) */
      xl:h-[18rem] xl:rounded-[30px] xl:p-6
      
      /* 2566px Desktop (Your working spec) */
      min-[2560px]:h-[21.06rem] min-[2560px]:rounded-[35px] min-[2560px]:p-8
    `}>


      <div className="absolute bg-white/10 rounded-full blur-3xl pointer-events-none
        -top-4 -right-4 w-12 h-12
        lg:w-32 lg:h-32 lg:-top-10 lg:-right-10
        min-[2560px]:-top-16 min-[2560px]:-right-16 min-[2560px]:w-48 min-[2560px]:h-48
      "></div>

      <div className="absolute bottom-0 left-0 bg-black/10 rounded-full blur-2xl pointer-events-none
        w-8 h-8
        lg:w-20 lg:h-20
        min-[2560px]:w-32 min-[2560px]:h-32
      "></div>

      <div className="flex justify-between items-start z-10 relative">
        <div className="flex items-center gap-1 lg:gap-3 min-[2560px]:gap-4">

          <div className={`flex items-center justify-center shadow-lg text-white rounded-[10px] ${iconBg}
            w-[0.8rem] h-[0.76rem]
            lg:w-10 lg:h-10
            min-[2560px]:w-12 min-[2560px]:h-12 min-[2560px]:rounded-full
          `}>
            <img
              src={Icon}
              alt={title}
              className="
                w-[0.5rem] h-[0.5rem]
                lg:w-5 lg:h-5
                min-[2560px]:w-6 min-[2560px]:h-6
              "
            />
          </div>

          <span className="leading-none text-blue-100 opacity-90
            text-[5px] font-semibold
            lg:text-sm lg:font-semibold
            xl:text-lg
            min-[2560px]:text-xl
          ">
            {title}
          </span>
        </div>
      </div>

      <div className="relative z-10 text-center">
        <h3 className="font-bold leading-none text-[#FFFFFF]
          text-[24px]
          lg:text-[60px] 
          xl:text-[80px]
          min-[2560px]:text-[128px]
        ">
          {count}
        </h3>
      </div>

      <div className="flex justify-end z-10 relative">
        <MoreHorizontal className="text-white/60 hover:text-white cursor-pointer 
          w-3 h-3
          lg:w-6 lg:h-6
          min-[2560px]:w-8 min-[2560px]:h-8
        " />
      </div>
    </div>
  );
};

export default CountCard;