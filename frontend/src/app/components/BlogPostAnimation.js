"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export const BlogPostAnimation = () => {
    useLayoutEffect(() => {
        gsap.from(".blog-post", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".blog-section",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }, []);
    return null;
}
