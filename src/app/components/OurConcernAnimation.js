"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const OurConcernAnimation = () => {
    useLayoutEffect(() => {
        gsap.utils.toArray(".our-concern-item").forEach((item) => {
            gsap.from(item, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                    scrub: true
                },
            });
        });
    }, []);
    return null;
};

export default OurConcernAnimation;
