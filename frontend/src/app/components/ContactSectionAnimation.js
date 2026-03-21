"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const ContactSectionAnimation = () => {
    useLayoutEffect(() => {
        gsap.from(".contact-form", {
            x: -20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 100%",
                scrub: true,
            }
        })
        gsap.from(".contact-info", {
            x: 20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 20%",
                scrub: true,
            }
        })
        gsap.from(".map", {
            y: 20,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 100%",
                scrub: true,
            }
        })
    }, []);
    return null;
}

export default ContactSectionAnimation