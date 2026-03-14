"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const HeaderAnimation = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
                duration: 1
            }
        });
        tl.from(".logo", {
            y: -50,
            opacity: 0,
        });
        tl.from(".header-menu ul li", {
            y: -30,
            opacity: 0,
            stagger: 0.15,
        });
        tl.from(".header-btn", {
            y: -10,
            opacity: 0,
        });
    }, []);
    return null;
};

export default HeaderAnimation;
