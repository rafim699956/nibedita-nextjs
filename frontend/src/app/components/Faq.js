import React from "react";
import SectionTitle from "./SectionTitle";
import FaqAnimation from "./FaqAnimation";

const Faq = () => {
    return (
        <section className="bg-[#FBF7FC] faq-section">
            <div className="container space-y-6 md:space-y-8 lg:space-y-14">
                <SectionTitle
                    title="Frequently Asked Questions"
                    description="We take pride in our team of highly accomplished professionals from diverse sectors, all committed to making a meaningful impact through their skills and passion."
                />
                <div className="lg:max-w-[58.188rem] mx-auto space-y-5">
                    <button
                        type="button"
                        className="pb-4 md:pb-6 lg:pb-8 border-b border-b-[#E0C3E4] space-y-4 text-left faq-item"
                    >
                        <h3 className="h5">Q1: What services does Nibedita offer? </h3>
                        <p className="lg:text-lg lg:leading-7 cursor-default">
                            Nibedita provides a wide range of services including maternal and
                            child healthcare, mental health support, physiotherapy, and food
                            catering services. Our aim is to ensure comprehensive care for
                            physical, emotional, and nutritional well-being.
                        </p>
                    </button>
                    <button
                        type="button"
                        className="pb-4 md:pb-6 lg:pb-8 border-b border-b-[#E0C3E4] space-y-4 text-left faq-item"
                    >
                        <h3 className="h5">Q1: What services does Nibedita offer? </h3>
                        <p className="lg:text-lg lg:leading-7 cursor-default">
                            Nibedita provides a wide range of services including maternal and
                            child healthcare, mental health support, physiotherapy, and food
                            catering services. Our aim is to ensure comprehensive care for
                            physical, emotional, and nutritional well-being.
                        </p>
                    </button>
                    <button
                        type="button"
                        className="pb-4 md:pb-6 lg:pb-8 border-b border-b-[#E0C3E4] space-y-4 text-left faq-item"
                    >
                        <h3 className="h5">Q1: What services does Nibedita offer? </h3>
                        <p className="lg:text-lg lg:leading-7 cursor-default">
                            Nibedita provides a wide range of services including maternal and
                            child healthcare, mental health support, physiotherapy, and food
                            catering services. Our aim is to ensure comprehensive care for
                            physical, emotional, and nutritional well-being.
                        </p>
                    </button>
                </div>
            </div>
            <FaqAnimation />
        </section>
    );
};

export default Faq;
