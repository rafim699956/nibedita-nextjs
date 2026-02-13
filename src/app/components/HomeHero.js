"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "../globals.css";
import heroBanner1 from "../../../public/herobanner1.png";
import heroBanner2 from "../../../public/herobanner2.png";
import heroBanner3 from "../../../public/herobanner3.png";
import heroBanner4 from "../../../public/herobanner4.png";
import heroBanner5 from "../../../public/herobanner5.png";
import rightArrow from "../../../public/rightarrow.png";

const HomeHero = () => {
    const homeHero = [
        {
            id: 1,
            title: "Taking care of every step of life: from health to nutrition",
            description:
                "CWFD Nibedita is dedicated to the well being of the society it is serving. Our concerns sphere around mother and child health, mental health care, physiotherapy and good food habits.",
            path: "/health-care",
            bgColor: "#9D5DA3",
            featuredImg: heroBanner1,
        },
        {
            id: 2,
            title: "Saleha Khanam Nibedita Maternal and Child Health Clinic",
            description:
                "To build the foundation of a society, our clinic offers medical services to mothers and their newborn child. We believe that the root of a healthy and sound society relies on a healthy mother and child.",
            path: "/health-care",
            bgColor: "#9D5DA3",
            featuredImg: heroBanner2,
        },
        {
            id: 3,
            title: "Nibedita Mental Health Centre",
            description:
                "On our mission to establish a society where mental wellness is appropriately understood, properly valued and has accessibility to affordable care. We are on a path to revolutionize society's belief on mental health care.",
            path: "/health-care",
            bgColor: "#1DA783",
            featuredImg: heroBanner3,
        },
        {
            id: 4,
            title: "Nibedita Physiotherapy",
            description:
                "Our physiotherapy centre provides the most advanced physiotherapy services. So that patients don’t have to worry about going abroad. Our aim is to deliver an international standard of physiotherapy care.",
            path: "/health-care",
            bgColor: "#5D499D",
            featuredImg: heroBanner4,
        },
        {
            id: 5,
            title: "Nibedita Canteen",
            description:
                "Nibedita canteen was established with the concern of providing food lovers with tasty and quality food. In this market of unhygienic food service, we stand firm to serve the society with foods that they can enjoy without any doubt.",
            path: "/health-care",
            bgColor: "#C52B27",
            featuredImg: heroBanner5,
        },
    ];
    return (
        <section className="py-0">
            <Swiper
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                autoplay={{
                    autoplay: false,
                    delay: 3000,
                }}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
            >
                {homeHero &&
                    homeHero.map((item) => (
                        <SwiperSlide
                            className="h-auto! lg:h-full flex! lg:block"
                            key={item.id}
                        >
                            <div
                                className="lg:min-h-215 h-full flex items-start lg:items-center relative py-12 lg:py-24 w-full"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="container flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
                                    <div className="lg:w-1/2 lg:pr-8.5 space-y-8 md:space-y-10 lg:space-y-16">
                                        <div className="space-y-4 lg:space-y-6">
                                            <h2 className="text-white font-semibold text-[1.875rem] leading-[2.4rem] md:text-[3rem] md:leading-[3.6rem] lg:text-[4.375rem] lg:leading-19.5">
                                                {item.title}
                                            </h2>
                                            <p className="text-white text-sm leading-5.5 lg:text-lg lg:leading-8">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div>
                                            <Link
                                                className="py-2 lg:py-4 px-5 lg:px-9 bg-white rounded-[2.75rem] inline-flex items-center gap-2 text-sm leading-5.5 lg:text-lg lg:leading-6.5 font-medium"
                                                href={item.path}
                                            >
                                                Know More
                                                <Image
                                                    width={24}
                                                    height={24}
                                                    className="size-6"
                                                    src={rightArrow}
                                                    alt="right arrow"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 lg:absolute right-0 top-0 bottom-0">
                                        <Image
                                            width={`100%`}
                                            height={`100%`}
                                            className="w-full max-w-full h-full object-cover"
                                            src={item.featuredImg}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                <div className="container absolute z-20 bottom-2 lg:bottom-24 left-1/2 transform -translate-x-1/2">
                    <div className="lg:w-1/2">
                        <div className="custom-pagination"></div>
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default HomeHero;
