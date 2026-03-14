"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const LatestBlogAnimation = () => {
    useEffect(() => {
        gsap.from(".letest-news-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".letest-news-wrapper",
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
            },
        });
    }, []);
    return null;
}

export default LatestBlogAnimation