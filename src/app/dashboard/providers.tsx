'use client'

import {ReactNode } from "react";

// ** Store
import { Provider } from 'react-redux'
import store from '@/store'

// ** UI
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/navbar";


const Providers = ({children}: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="flex w-full h-full">
        <div className={`bg-n50 hidden md:inline-block md:w-[270px] p-5 min-h-screen fixed left-0 top-0`}>
          <Sidebar />
        </div>
        <div className={`w-full md:pl-[270px]`}>
          <div className=" fixed top-0 w-full md:w-[calc(100vw-270px)]  z-50">
            <Navbar/>
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