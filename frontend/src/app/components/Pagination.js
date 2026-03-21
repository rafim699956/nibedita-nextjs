'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";

const Pagination = () => {
  const pathname = usePathname();
  const routeText = pathname.slice(1);
  return (
    <div className="flex items-center gap-2">
      <Link
        className="inline-flex items-center gap-1.5 text-sm font-medium leading-5 text-[#7E4883]"
        href="/"
      >
        <CiLocationOn className="text-sm" />
        Home
      </Link>
      <span className="text-sm font-medium leading-5 text-[#7E4883]">/</span>
      <span className="capitalize text-sm font-medium leading-5 text-[#7E4883]">
        {routeText}
      </span>
    </div>
  );
};

export default Pagination;
