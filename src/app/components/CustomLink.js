"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
    const pathname = usePathname();
  return <Link className={`px-3.5 py-[0.688rem] capitalize leading-6.5 font-medium relative transition-all ease-linear duration-300 hover:text-primary-600 ${pathname === path ? 'text-primary-600' : "text-primary-950"}`} href={path}>{children}</Link>;
};

export default CustomLink;
