"use client";
import logo from "../../../public/sitelogo.png";
import { MdMenu } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { useEffect, useState } from "react";
import HeaderAnimation from "./HeaderAnimation";
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
    useEffect(() => {
        const lenis = window.lenis;

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = "auto";
            if (lenis) lenis.start();
        }

        return () => {
            document.body.style.overflow = "auto";
            if (lenis) lenis.start();
        };
    }, [isMenuOpen]);
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
                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-998 lg:hidden transition-opacity duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        ></div>
                    )}
                    <nav
                        data-lenis-prevent
                        className={`fixed top-0 left-0 h-full w-70 bg-white z-999 p-6 shadow-xl transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} transition-transform duration-300 ease-in-out lg:static lg:transform-none lg:flex lg:flex-row lg:items-center lg:justify-end lg:grow lg:basis-auto lg:p-0 lg:shadow-none lg:bg-transparent lg:h-auto lg:w-auto header-menu overflow-x-auto`}
                    >
                        <div className="flex justify-end lg:hidden mb-8">
                            <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-primary-600">
                                ✕
                            </button>
                        </div>

                        <ul className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto gap-4">
                            {links.map((link) => (
                                <li key={link.id} className="flex items-center relative" onClick={() => setIsMenuOpen(false)}>
                                    <CustomLink path={link.path}>{link.label}</CustomLink>
                                </li>
                            ))}
                        </ul>

                        <div className="header-btn mt-8 lg:mt-0 lg:ml-4">
                            <Link
                                className="py-3 px-6 bg-primary-600 rounded-lg inline-flex items-center gap-2 text-white font-medium text-base hover:bg-secondary hover:text-primary-100 transition-all duration-300 ease-linear w-full lg:w-auto justify-center"
                                href="/contact-us"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us <FaArrowRightLong className="text-2xl" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <HeaderAnimation />
        </header>
    );
};

export default Header;
