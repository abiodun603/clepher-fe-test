'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={` h-[54px] flex items-center gap-[10px] pl-5  my-[5px] rounded-[10px] hover:bg-p100 ${
        pathname === item.path && 'bg-p100'
      }`}
    >
      <Image
        src={pathname === item.path ? item.imageActive : item.image }
        alt=''
        height={38}
        width={38}
        className={`h-auto w-auto ${pathname === item.path ? 'fill-blue-200' : 'fill-blue-400'}`}          
      />
      {/* </span> */}
      <p className={`${pathname === item.path ? 'text-[16px] font-normal text-p800' : 'text-[16px] font-normal text-n900'}`}>{item.title}</p>
    </Link>
  );
};

export default MenuLink;
