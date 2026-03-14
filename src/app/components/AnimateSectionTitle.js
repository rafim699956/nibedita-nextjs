"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimateSectionTitle = () => {
    useLayoutEffect(() => {
        const elements = gsap.utils.toArray(".fade-up");
        elements.forEach((el) => {
            gsap.from(el, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                    scrub: true
                },
            });
        });
    }, []);
    return null;
};

export default AnimateSectionTitle;
