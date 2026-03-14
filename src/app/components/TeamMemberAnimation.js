"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TeamMemberAnimation = () => {
    useLayoutEffect(() => {
        gsap.from(".team-member-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".team-member-wrapper",
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
            },
        });
    }, []);
    return null;
};

export default TeamMemberAnimation;
