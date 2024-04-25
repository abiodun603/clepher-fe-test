'use client'

import Image from "next/image";

// ** Images
import { Assets } from '@/assets'

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
        imageActive: Assets.dashboard
      }
    ],
  }
];


const Sidebar =  () => {
  return (
    <div className="sticky top-10 h-[100dvh]">
       
      <div className="flex items-center gap-[20px] mb-14">
        <Image
          src={Assets.logoBlack}
          alt=""
          width="120"
          height="50"
          className=""
        />
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