<<<<<<< HEAD
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f3f5] font-sans relative overflow-x-hidden selection:bg-blue-100">

      {/* NAVBAR  */}
      <div className="relative z-50 px-[30px]  pb-[10px] w-full">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      {/* SIDEBAR  */}

      <div className="flex flex-1 pt-8 relative w-full 2xl:ml-24 xl:ml-10 2xl:pr-16 ">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* MAIN:  */}
        <main className="flex-1 px-[30px] pb-[30px] overflow-x-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};

=======
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f3f5] font-sans relative overflow-x-hidden selection:bg-blue-100">


      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px]"></div>
      </div>

      {/* NAVBAR  */}
      <div className="relative z-50 px-[30px]  pb-[10px] w-full">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      {/* SIDEBAR  */}

      <div className="flex flex-1 pt-8 relative w-full xl:ml-24 xl:pr-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* MAIN:  */}
        <main className="flex-1 px-[30px] pb-[30px] overflow-x-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};

>>>>>>> e2afade72e57f13aea4d45b33c0e992989d3eb67
export default AppLayout;