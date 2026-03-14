"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimateSectionTitle = () => {
    useEffect(() => {
        const elements = gsap.utils.toArray(".fade-up");
        elements.forEach((el) => {
            gsap.from(el, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
            });
        });
    }, []);
    return null;
};

export default AnimateSectionTitle;
