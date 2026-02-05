import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import blogImg1 from "../../../public/blogimg1.png";
import blogImg2 from "../../../public/blogimg2.png";
import blogImg3 from "../../../public/blogimg3.png";
import blogImg4 from "../../../public/blogimg4.png";

const OurConcern = () => {
    const OurConcern = {
        sectionTitle: "Our concerns",
        sectionDes: "At Nibedita, we empower communities with essential healthcare services, including maternal care, mental wellness, nutrition, and physiotherapy, enhancing overall well-being.",
        blogPosts: [
            {
                id: 1,
                title: "Saleha Khanam Maternal and Child Health Center",
                des: "We offer complete healthcare services, focusing on maternal, child, and general patient care. Our facility has got experienced doctors and modern machinery. The goal is to ensure accessible, affordable healthcare while promoting preventive health practices for lasting well-being.",
                img: blogImg1
            },
            {
                id: 2,
                title: "Nibedita Mental Health Centre",
                des: "The Mental Health Center at Nibedita provides mental counseling and support. We drive to promote mental well-being. With custom care plans and a compassionate approach, we help individuals manage mental health challenges and improve their quality of life.",
                img: blogImg2
            },
            {
                id: 3,
                title: "Physiotherapy Center",
                des: "The Physiotherapy Center offers rehabilitation and pain management services to help individuals recover and maintain physical health. We provide specialist’s treatment plans to restore mobility and enhance long-term wellness.",
                img: blogImg3
            },
            {
                id: 4,
                title: "Canteen",
                des: "Nibedita’s Canteen serves healthy, affordable meals to promote better nutrition within the community. It aims to combat food insecurity. Our mission is to provide a clean, welcoming space to enjoy balanced meals.",
                img: blogImg4
            },
        ]
    }
    return (
        <section className="bg-primary-950">
            <div className="container space-y-6 md:space-y-8 lg:space-y-14">
                <div className="lg:max-w-[51.813rem] mx-auto text-center space-y-4">
                    <h2 className="text-white">{OurConcern.sectionTitle}</h2>
                    <p className="text-[#E5E5E5] lg:text-[1.25rem] lg:leading-8">
                        {OurConcern.sectionDes}
                    </p>
                </div>
                <div className="space-y-4 md:space-y-6 lg:space-y-8 lg:max-w-265 mx-auto">
                    {OurConcern.blogPosts &&
                        OurConcern.blogPosts.map((item) => (
                            <div
                                key={item.id}
                                className="p-5 lg:p-10 bg-white rounded-2xl flex flex-col md:flex-row items-center gap-6 lg:gap-10 md:even:flex-row-reverse"
                            >
                                <div className="w-full md:max-w-[38.61%] shrink-0">
                                    <Image className="w-full max-w-full object-cover" src={item.img}
                                        alt={`blog post ${item.id}`} />
                                </div>
                                <div className="grow space-y-6 lg:space-y-8">
                                    <div className="space-y-4">
                                        <h4>{item.title}</h4>
                                        <p>{item.des}</p>
                                    </div>
                                    <Link className="flex items-center gap-1.5" href="/">Know More <FaArrowRightLong className="text-2xl" /></Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default OurConcern;
