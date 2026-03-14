"use client";
import logo from "../../../public/sitelogo.png";
import { MdMenu } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        {
            id: 1,
            label: "home",
            path: "/",
        },
        {
            id: 2,
            label: "about",
            path: "/about",
        },
        {
            id: 3,
            label: "services",
            path: "/services",
            submenu: [
                {
                    id: 1,
                    label: "Maternal and Child Health Center",
                    path: "/maternal-and-child-health-center",
                },
                {
                    id: 2,
                    label: "Mental Health Center",
                    path: "/mental-health-center",
                },
                {
                    id: 3,
                    label: "Physiotherapy Center (Coming soon)",
                    path: "/physiotherapy-center",
                },
                {
                    id: 4,
                    label: "Catering Service",
                    path: "/catering-service",
                },
            ],
        },
        {
            id: 4,
            label: "news & events",
            path: "/news-and-events",
        },
        {
            id: 5,
            label: "career",
            path: "/career",
        },
    ];
    console.log(isMenuOpen);
    return (
        <header className="py-5 bg-white">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link className="logo" href="/">
                        <Image className="w-[9.282rem]" src={logo} alt="site logo" width={148} height={30} />
                    </Link>
                    <button
                        className={`p-2 rounded border border-primary-100 cursor-pointer lg:hidden`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <MdMenu className="text-2xl" />
                    </button>
                    <nav
                        className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end grow basis-full lg:basis-auto transition-all duration-300 ease-linear header-menu`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto">
                            {links.map((link) => (
                                <li key={link.id} className="flex items-center relative">
                                    <CustomLink path={link.path}>{link.label}</CustomLink>
                                </li>
                            ))}
                        </ul>
                        <div className="header-btn">
                            <Link
                                className="py-3 px-6 bg-primary-600 rounded-lg inline-flex items-center gap-2 text-white font-medium text-base hover:bg-secondary hover:text-primary-100 transition-all duration-300 ease-linear"
                                href="/contact-us"
                            >
                                Contact Us <FaArrowRightLong className="text-2xl" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
