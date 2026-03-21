"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const FaqAnimation = () => {
    useLayoutEffect(() => {
        gsap.utils.toArray(".faq-item").forEach((faqIetm) => {
            gsap.from(faqIetm, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".faq-section",
                    start: "top 60%",
                    toggleActions: "play reverse play reverse",
                    scrub: true
                },

            })
        })

    }, [])
    return null;
}

export default FaqAnimation