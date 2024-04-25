'use client'

import {ReactNode,  useEffect, useState } from "react";

// ** Store
import { Provider } from 'react-redux'
import store from '@/store'

// ** UI
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/navbar";


const Providers = ({children}: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Provider store={store}>
      <div className="flex w-full h-full">
        <div className={`bg-n50 w-[270px] p-5 min-h-screen fixed left-0 top-0 transform ${isSidebarOpen ? '' : '-translate-x-full'}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`w-full ${isSidebarOpen ? "lg:pl-[270px]" : "lg:p-0"} `}>
          <div className=" fixed top-0 w-[calc(100vw-270px)]  z-50">
            <Navbar isSidebarOpen = {isSidebarOpen} toggleSidebar={toggleSidebar}/>
          </div>
          <div className="w-full min-h-screen bg-n50 pt-24 pb-16 px-6">
            {children}
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Providers