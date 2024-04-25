"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

// ** Icons
import { BellRing } from 'lucide-react';
// import { FaAngleLeft , FaAngleRight} from "react-icons/fa6";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({isSidebarOpen, toggleSidebar}) => {
  const pathname = usePathname();


  return (
    <div className="h-20 flex items-center justify-between px-5 bg-white border-b-[0.5px] border-n400 z-50">
      {/* {
        !isSidebarOpen ?
        <div className='absolute flex items-center justify-center -left-[10px] top-8 w-5 h-5 rounded-full bg-p900 z-50'>
          <FaAngleLeft color='#FFFFFF' onClick={toggleSidebar}/>
        </div>:
        <div className='absolute flex items-center justify-center -left-[10px] top-8 w-5 h-5 rounded-full bg-p900 z-50'>
          <FaAngleRight color='#FFFFFF' onClick={toggleSidebar}/>
        </div>
      } */}
      <div>
        <div className="hidden lg:inline text-n900 text-2xl font-semibold capitalize">{pathname.split("/").pop()}</div>
      </div>
      <div className="flex items-center gap-5 pr-4">
        <div className="flex items-center gap-5">      
          <BellRing className="text-n900" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;