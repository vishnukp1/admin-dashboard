<<<<<<< HEAD
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOX } from '../../../assets';

const ExpiringListTable = () => {
   return (
      <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm flex flex-col relative w-full
         rounded-[10px] p-3 h-[9.6rem]  
         md:rounded-[24px] md:p-6 md:h-[25rem]
         min-[2560px]:rounded-[40px] min-[2560px]:p-8 min-[2560px]:h-[33.44rem]
      ">
         <div className="flex justify-between items-center 
            mb-2
            md:mb-6 
            min-[2560px]:mb-10
         ">
            <h2 className="font-semibold leading-none text-[#02024B]
               text-[0.625rem]
               md:text-2xl
               min-[2560px]:text-4xl
            ">
               This Month Expires Documents
            </h2>

            <button className="flex items-center justify-center rounded-full border border-gray-200 bg-white/50 hover:bg-white transition-colors
               w-5 h-5
               md:w-10 md:h-10
               min-[2560px]:w-12 min-[2560px]:h-12
            ">
               <ArrowUpRight className="text-gray-500 
                  w-3 h-3 
                  md:w-5 md:h-5 
                  min-[2560px]:w-5 min-[2560px]:h-5" 
               />
            </button>
         </div>

         <div className="overflow-x-auto pb-2 no-scrollbar">
            <div className="grid grid-cols-6 border-b border-gray-200 
               min-w-[200px] gap-2 pb-2 mb-2
               md:min-w-[600px] md:gap-4 md:pb-4 md:mb-4
               min-[2560px]:min-w-[800px] min-[2560px]:gap-6 min-[2560px]:pb-6 min-[2560px]:mb-6
            ">
               {['Entity', 'Email', 'Doc Name', 'Doc Type', 'Doc Type', 'Doc Type'].map((header, index) => (
                  <span key={index} className="font-normal leading-none text-[var(--color-black)]
                     text-[0.3125rem]
                     md:text-xs
                     min-[2560px]:text-[0.9375rem]
                  ">
                     {header}
                  </span>
               ))}
            </div>
         </div>

         <div className="flex-1 flex flex-col items-center justify-center opacity-60">
            <div className="flex items-center justify-center bg-blue-50 rounded-full 
               w-10 h-10 mb-2
               md:w-20 md:h-20 md:mb-4
               min-[2560px]:w-28 min-[2560px]:h-28 min-[2560px]:mb-6
            ">
               <img src={BOX} alt="box" className="
                  w-5 h-5 
                  md:w-10 md:h-10 
                  min-[2560px]:w-auto min-[2560px]:h-auto" 
               />
            </div>
            <div className="bg-gray-200 rounded-full
               h-1 w-10
               md:h-1.5 md:w-16
               min-[2560px]:h-1.5 min-[2560px]:w-24
            "></div>
         </div>
      </div>
   );
};

=======
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOX } from '../../../assets';

const ExpiringListTable = () => {
   return (
      <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm flex flex-col relative w-full
         rounded-[10px] p-3 h-[9.6rem]  
         md:rounded-[24px] md:p-6 md:h-[25rem]
         min-[2560px]:rounded-[40px] min-[2560px]:p-8 min-[2560px]:h-[33.44rem]
      ">
         <div className="flex justify-between items-center 
            mb-2
            md:mb-6 
            min-[2560px]:mb-10
         ">
            <h2 className="font-poppins font-semibold leading-none text-[#02024B]
               text-[0.625rem]
               md:text-2xl
               min-[2560px]:text-4xl
            ">
               This Month Expires Documents
            </h2>

            <button className="flex items-center justify-center rounded-full border border-gray-200 bg-white/50 hover:bg-white transition-colors
               w-5 h-5
               md:w-10 md:h-10
               min-[2560px]:w-12 min-[2560px]:h-12
            ">
               <ArrowUpRight className="text-gray-500 
                  w-3 h-3 
                  md:w-5 md:h-5 
                  min-[2560px]:w-5 min-[2560px]:h-5" 
               />
            </button>
         </div>

         <div className="overflow-x-auto pb-2 no-scrollbar">
            <div className="grid grid-cols-6 border-b border-gray-200 
               min-w-[200px] gap-2 pb-2 mb-2
               md:min-w-[600px] md:gap-4 md:pb-4 md:mb-4
               min-[2560px]:min-w-[800px] min-[2560px]:gap-6 min-[2560px]:pb-6 min-[2560px]:mb-6
            ">
               {['Entity', 'Email', 'Doc Name', 'Doc Type', 'Doc Type', 'Doc Type'].map((header, index) => (
                  <span key={index} className="font-poppins font-normal leading-none text-[var(--color-black)]
                     text-[0.3125rem]
                     md:text-xs
                     min-[2560px]:text-[0.9375rem]
                  ">
                     {header}
                  </span>
               ))}
            </div>
         </div>

         <div className="flex-1 flex flex-col items-center justify-center opacity-60">
            <div className="flex items-center justify-center bg-blue-50 rounded-full 
               w-10 h-10 mb-2
               md:w-20 md:h-20 md:mb-4
               min-[2560px]:w-28 min-[2560px]:h-28 min-[2560px]:mb-6
            ">
               <img src={BOX} alt="box" className="
                  w-5 h-5 
                  md:w-10 md:h-10 
                  min-[2560px]:w-auto min-[2560px]:h-auto" 
               />
            </div>
            <div className="bg-gray-200 rounded-full
               h-1 w-10
               md:h-1.5 md:w-16
               min-[2560px]:h-1.5 min-[2560px]:w-24
            "></div>
         </div>
      </div>
   );
};

>>>>>>> e2afade72e57f13aea4d45b33c0e992989d3eb67
export default ExpiringListTable;