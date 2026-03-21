import React from "react";
import image1 from "../../../public/whatwedo.png";
import image2 from "../../../public/whoweare.png";
import OurEssence from "./OurEssence";

const WholisticCare = () => {
    const wholisticCareData = [
        {
            id: 1,
            title: "What we do",
            desc: "At CWFD Nibedita, our maternal and child healthcare service provides mothers and their little ones safe and compassionate health services while they are in their beautiful journey of motherhood. We believe every woman and child deserves care, love, and support through life’s most delicate moments. Our Nibedita Mental Healthcare Center provides easy access to counseling and healing services to create a community of sound citizens. Because we understand the silent battles within. That is why our mental health care creates a warm, understanding space where patients can heal, grow, and rediscover their strengths. Another concern of ours is Nibedita Physiotherapy Centre. There we help individuals reclaim their health, whether healing after an accident or simply finding ease in everyday movements. And because nourishment is love, our food catering service Nibedita Canteen offers wholesome, heartfelt meals to build an overall healthier society.",
            imageUrl: image1,
        },
        {
            id: 2,
            title: "Who we are",
            desc: "CWFD Nibedita is a place of care and hope, working to make communities healthier and stronger since 1975. We focus on the well-being of mothers, children, and families, offering care that touches both the body and mind. From physical health to mental support and nutritious food, we believe everyone deserves to feel cared for and valued. At Nibedita, we see health not just as a service but as a basic right. The right to live with dignity, strength, and happiness. With love and commitment, we’re here to help communities grow, heal, and live together.",
            imageUrl: image2,
        },
    ];
    return (
        <section>
            <div className="container space-y-6 md:space-y-10 lg:space-y-16">
                <div className="lg:max-w-[53.688rem] mx-auto">
                    <h2 className="text-center">
                        Providing women, children, and families with compassionate care for
                        their physical, mental, and maternal well-being
                    </h2>
                </div>
                {wholisticCareData && (
                    <div className="space-y-6 md:space-y-10 lg:space-y-18">
                        {wholisticCareData.map(item => (
                            <OurEssence key={item.id} id={item.id} title={item.title} desc={item.desc} imageSrc={item.imageUrl} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default WholisticCare;
