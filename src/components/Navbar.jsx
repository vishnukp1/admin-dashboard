<<<<<<< HEAD
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { NOTIFICATION, TECHONLOGO, TECHONONNOVATIONLOGO, TOGGLE } from '../assets';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full flex items-center justify-between pt-[1.18rem] px-[1.37rem] lg:pt-[2rem] lg:px-[1rem] 2xl:pt-[5.7rem] 2xl:px-[2.5rem] min-[2560px]:pt-[3.5rem] min-[2560px]:px-[3.3rem] transition-all duration-500 ease-in-out">

      <div className="flex items-center gap-4 lg:gap-6 min-[2560px]:gap-[4.5rem]">
        <div className="flex items-center select-none">
          <img
            src={TECHONLOGO}
            alt="techon logo"
            className="w-[7.37rem] h-auto lg:w-[8.75rem] min-[2560px]:w-[11.18rem] transition-all duration-500"
          /> 
        </div>

        <div className="hidden lg:block h-8 w-[2px] bg-gray-300 mx-2 min-[2560px]:h-10 min-[2560px]:w-[1px]"></div>

        <h1 className="hidden lg:block font-bold text-[#02024B] leading-none tracking-tight text-[2rem] min-[2560px]:text-[3rem]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-6 min-[2560px]:gap-[3rem]">
        <button className="relative group hover:scale-105 transition-transform duration-300">
          <img
            src={NOTIFICATION}
            alt="notification"
            className="w-[1.52rem] h-[1.52rem] lg:w-[2rem] lg:h-[2rem] min-[2560px]:w-[3.25rem] min-[2560px]:h-[3.25rem]"
          />
        </button>

        <button
          onClick={toggleSidebar}
          className="lg:hidden hover:bg-gray-100 rounded-md transition-colors duration-300"
        >
          <img
            src={TOGGLE}
            alt="toggle"
            className="w-[1.52rem] h-[1.52rem]"
          />
        </button>

        <div className="hidden lg:flex items-center gap-4 min-[2560px]:gap-6 pl-4 border-l-2 border-gray-300 min-[2560px]:border-l-[1px] min-[2560px]:pl-[2.5rem]">
          <div className="flex flex-col items-end leading-none gap-1">
            <span className="font-medium text-[#4B66E3] text-lg min-[2560px]:text-[1.5rem]">
              techon
            </span>
            <span className="font-normal text-black text-xs min-[2560px]:text-[1.25rem]">
              Admin
            </span>
          </div>

          <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 w-10 h-10 min-[2560px]:w-[3.8rem] min-[2560px]:h-[3.75rem]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={TECHONONNOVATIONLOGO}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-6 h-6 min-[2560px]:w-8 min-[2560px]:h-8 text-black" />
          </button>
        </div>
      </div>
    </header>
  );
};

=======
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { NOTIFICATION, TECHONLOGO, TECHONONNOVATIONLOGO, TOGGLE } from '../assets';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full flex items-center justify-between pt-[1.18rem] px-[1.37rem] xl:pt-[5.7rem] xl:px-[2.5rem] min-[2560px]:pt-[3.5rem] min-[2560px]:px-[3.3rem] transition-all duration-500 ease-in-out">

      <div className="flex items-center gap-4 lg:gap-6 min-[2560px]:gap-[4.5rem]">
        <div className="flex items-center select-none">
          <img
            src={TECHONLOGO}
            alt="techon logo"
            className="w-[7.37rem] h-auto lg:w-[8.75rem] min-[2560px]:w-[11.18rem] transition-all duration-500"
          />
        </div>

        <div className="hidden lg:block h-8 w-[2px] bg-gray-300 mx-2 min-[2560px]:h-10 min-[2560px]:w-[1px]"></div>

        <h1 className="hidden lg:block font-poppins font-bold text-[#02024B] leading-none tracking-tight text-[2rem] min-[2560px]:text-[3rem]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-6 min-[2560px]:gap-[3rem]">
        <button className="relative group hover:scale-105 transition-transform duration-300">
          <img
            src={NOTIFICATION}
            alt="notification"
            className="w-[1.52rem] h-[1.52rem] lg:w-[2rem] lg:h-[2rem] min-[2560px]:w-[3.25rem] min-[2560px]:h-[3.25rem]"
          />
        </button>

        <button
          onClick={toggleSidebar}
          className="lg:hidden hover:bg-gray-100 rounded-md transition-colors duration-300"
        >
          <img
            src={TOGGLE}
            alt="toggle"
            className="w-[1.52rem] h-[1.52rem]"
          />
        </button>

        <div className="hidden lg:flex items-center gap-4 min-[2560px]:gap-6 pl-4 border-l-2 border-gray-300 min-[2560px]:border-l-[1px] min-[2560px]:pl-[2.5rem]">
          <div className="flex flex-col items-end leading-none gap-1">
            <span className="font-poppins font-medium text-[#4B66E3] text-lg min-[2560px]:text-[1.5rem]">
              techon
            </span>
            <span className="font-poppins font-normal text-black text-xs min-[2560px]:text-[1.25rem]">
              Admin
            </span>
          </div>

          <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 w-10 h-10 min-[2560px]:w-[3.8rem] min-[2560px]:h-[3.75rem]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={TECHONONNOVATIONLOGO}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-6 h-6 min-[2560px]:w-8 min-[2560px]:h-8 text-black" />
          </button>
        </div>
      </div>
    </header>
  );
};

>>>>>>> e2afade72e57f13aea4d45b33c0e992989d3eb67
export default Navbar;