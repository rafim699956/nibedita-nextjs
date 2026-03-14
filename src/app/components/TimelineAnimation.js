"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TimelineAnimation = () => {
    useLayoutEffect(() => {
        gsap.utils.toArray(".timeline-item-right").forEach((itemRight) => {
            gsap.from(itemRight, {
                x: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: itemRight,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });
        });
        gsap.utils.toArray(".timeline-item-left").forEach((itemLeft) => {
            gsap.from(itemLeft, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: itemLeft,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });
        });
        gsap.fromTo(".timeline-middle-line",{
                height: "0%"
            },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-middle-line",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true
                }
            }
        );
    }, []);
    return null;
};

export default TimelineAnimation;
