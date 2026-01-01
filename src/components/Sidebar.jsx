<<<<<<< HEAD
import React from 'react';
import { LogOut, X } from 'lucide-react';
import { sidebarLinks } from '../data/sampleData';
import { TECHONONNOVATIONLOGO } from '../assets';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] lg:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-screen z-[70] 
        lg:static lg:h-screen lg:z-40
        /* Mobile: Wider to fit the list view. Laptop: Standard width */
        w-[380px] lg:w-[120px] 
        flex flex-col items-center 
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>


        <div className={`
          bg-[#f2f3f5] lg:bg-white /* Mobile bg matches body, Laptop is white pill */
          lg:shadow-xl lg:shadow-blue-900/5 lg:border lg:border-white/40
          flex flex-col items-center
          
          /* PHONE: Full screen card look */
          w-[90%] h-[96vh] mt-[2vh] rounded-[30px] px-4 py-6 lg:py-0 bg-white shadow-2xl
          
          /* LAPTOP: Original Floating Pill */
          lg:w-[66px] lg:h-auto lg:mt-0 lg:rounded-[45px]  lg:px-0 lg:bg-white
        `}>



          <nav className="flex-1 flex flex-col gap-5 w-full items-center pt-1 overflow-y-auto no-scrollbar px-1 lg:px-0">
            {sidebarLinks.map((item) => (
              <button
                key={item.id}
                className={`
                  group flex items-center transition-all duration-300 relative
                  
                  /* PHONE: Row layout, full width, no background on the row itself */
                  w-full justify-start gap-4 p-0 bg-transparent

                  /* LAPTOP: Circle button, centered, specific background colors */
                  lg:w-12 lg:h-12 lg:justify-center lg:gap-0 lg:shadow-sm lg:rounded-full
                  ${item.active
                    ? "lg:bg-[#bef264] lg:text-black lg:shadow-lime-200/50 lg:scale-110 lg:ring-2 lg:ring-white"
                    : "lg:bg-white lg:text-gray-400 lg:hover:bg-gray-50 lg:hover:scale-105"
                  }
                `}
              >

                <div className={`
                   flex items-center justify-center shrink-0
                   w-12 h-12 rounded-full shadow-sm
                   lg:w-auto lg:h-auto lg:shadow-none lg:bg-transparent lg:rounded-none
                   ${item.active ? "bg-[#bef264]" : "bg-white"}
                `}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                </div>


                <span className={`
                  lg:hidden font-medium text-lg  text-[var(--color-black)]
                `}>
                  {item.label}

                </span>
              </button>
            ))}
          </nav>



          <div className="mt-auto w-full flex flex-col gap-4 lg:hidden pt-4">
            <div className="flex items-center gap-4 w-full">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white shadow-sm">
                <LogOut className="w-5 h-5 text-gray-400" />
              </div>
              <span className="font-bold text-lg text-gray-400">Logout</span>
            </div>
          </div>

        </div>


        <div className="hidden lg:flex mt-auto w-[66px] bg-white rounded-[45px] border border-white/40 shadow-xl shadow-blue-900/5 flex-col items-center py-4">
          <div className="flex flex-col items-center gap-4">
            <button className="flex items-center justify-center rounded-full bg-white border border-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors shadow-sm w-10 h-10 lg:w-12 lg:h-12">
              <LogOut className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <div className="flex items-center justify-center rounded-full shadow-lg cursor-pointer w-9 h-9 lg:w-10 lg:h-10 overflow-hidden bg-black">
              <img
                src={TECHONONNOVATIONLOGO}
                alt="technologo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};

=======
import React from 'react';
import { LogOut, X } from 'lucide-react';
import { sidebarLinks } from '../data/sampleData';
import { TECHONONNOVATIONLOGO } from '../assets';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] lg:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-screen z-[70] 
        lg:static lg:h-screen lg:z-40
        w-[120px] flex flex-col items-center gap-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>

      
        <div className="w-[66px] h-auto bg-white rounded-[45px] border border-white/40 shadow-xl shadow-blue-900/5 flex flex-col items-center  ">
          <button className="lg:hidden mb-4 p-2" onClick={toggleSidebar}>
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <nav className="flex-1 flex flex-col gap-6 w-full items-center pt-2 overflow-y-auto no-scrollbar">
            {sidebarLinks.map((item) => (
              <button
                key={item.id}
                className={`
                  flex items-center justify-center rounded-full transition-all duration-300 relative shadow-sm
                  w-10 h-10 lg:w-12 lg:h-12
                  ${item.active
                    ? "bg-[#bef264] text-black shadow-lime-200/50 scale-110 ring-2 ring-white"
                    : "bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600 hover:scale-105"
                  }
                `}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto w-[66px] bg-white rounded-[45px] border border-white/40 shadow-xl shadow-blue-900/5 flex flex-col items-center py-4">
          <div className="flex flex-col items-center gap-4">
            <button className="flex items-center justify-center rounded-full bg-white border border-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors shadow-sm w-10 h-10 lg:w-12 lg:h-12">
              <LogOut className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <div className="flex items-center justify-center rounded-full shadow-lg cursor-pointer w-9 h-9 lg:w-10 lg:h-10 overflow-hidden bg-black">
              <img 
                src={TECHONONNOVATIONLOGO} 
                alt="technologo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};

>>>>>>> e2afade72e57f13aea4d45b33c0e992989d3eb67
export default Sidebar;