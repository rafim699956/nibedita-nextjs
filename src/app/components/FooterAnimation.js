"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const FooterAnimation = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
                duration: 1
            }
        });
        tl.from(".footer-left", {
            y: -40,
            opacity: 0,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 50%",
                end: "bottom 100%",
                scrub: true,
            },
        });
        tl.from(".our-service", {
            y: -40,
            opacity: 0,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 50%",
                end: "bottom 100%",
                scrub: true,
            },
        });
        tl.from(".quick-link", {
            y: -40,
            opacity: 0,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 50%",
                end: "bottom 100%",
                scrub: true,
            },
        });
        tl.from(".company", {
            y: -40,
            opacity: 0,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 50%",
                end: "bottom 100%",
                scrub: true,
            },
        });
    }, []);
    return null;
};

export default FooterAnimation;
