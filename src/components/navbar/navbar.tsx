"use client";

import { usePathname } from "next/navigation";

// ** Icons
import { BellRing } from 'lucide-react';


const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="nav">
      <div>
        <div className="lg:inline text-n900 text-2xl font-semibold capitalize">{pathname.split("/").pop()}</div>
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