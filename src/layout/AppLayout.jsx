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

export default AppLayout;