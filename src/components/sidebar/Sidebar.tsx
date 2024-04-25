'use client'

import Image from "next/image";

// ** Images
import { Assets } from '@/assets'

// icons
import { ChevronLeft } from 'lucide-react';

// ** Components
import MenuLink from "./menuLink/menuLink";


const MENU_ITEMS = [
  {
    title: "Menu",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        image: Assets.dashboard,
        imageActive: Assets.dashboardActive
      }
    ],
  }
];

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar =  ({isSidebarOpen, toggleSidebar}: SidebarProps) => {

  return (
    <div className="sticky top-10 h-[100dvh]">
       
      <div className="flex items-center gap-[20px] mb-14">
        <Image
          src={"/logo-black.svg"}
          alt=""
          width="120"
          height="50"
          className=""
        />
        {
          !isSidebarOpen && <div className='absolute flex items-center justify-center -right-8 top-2.5 w-5 h-5 rounded-full bg-p900 z-50' onClick={toggleSidebar}>
            <ChevronLeft color='#FFFFFF'/>
          </div>
        }
      </div>
      <ul className={`list-none`}>
        {MENU_ITEMS.map((category) => (
          <li key={category.title}>
            <span className="text-sm font-medium text-n600">{category.title}</span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;