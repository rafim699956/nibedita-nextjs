import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import newsImage from "../../../public/newsandevent.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsAndEvents = () => {
    return (
        <section tion className="lg:pt-10 lg:pb-16 bg-[linear-gradient(180deg,#EDDEF0_66.66%,#FFFFFF_100.88%)]">
            <div className="container space-y-6 md:space-y-10 lg:space-y-16">
                <div className="space-y-6 md:space-y-10 lg:space-y-20">
                    <Pagination />
                    <div className="lg:max-w-220.5 mx-auto text-center space-y-3">
                        <h2>News & Events</h2>
                        <p className="lg:text-lg lg:leading-7">
                            Learn about our recent works and insights on health issues. Get a
                            deeper understanding of the human body and mind, how you can save
                            yourself from the life hampering issues and keep your family sound
                            and healthy.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-center rounded-lg gap-4 md:gap-6 lg:gap-8">
                    <div className="lg:max-w-126.5 w-full shrink-0 rounded-lg overflow-hidden">
                        <Image src={newsImage} alt="News and Events" width={506} height={312} />
                    </div>
                    <div className="grow">
                        <p className="text-sm leading-5 text-[#737373] mb-2">July 31, 2025</p>
                        <h3 className="mb-4 lg:mb-6">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</h3>
                        <p className="mb-6 md:mb-8 lg:mb-10.5">Lorem ipsum dolor sit amet consectetur. Suspendisse in augue nulla euismod suspendisse fringilla. Augue venenatis tellus proin faucibus id venenatis consequat vestibulum is the pellentesque diam mauris lacus ac vitae integer sit ultricies nibh nunc suspendisse.....</p>
                        <Link className="inline-flex items-center gap-1.5 font-medium" href="#">Read full artical <FaArrowRightLong className="text-2xl" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;
