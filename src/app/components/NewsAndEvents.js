import React from "react";
import Pagination from "./Pagination";

const NewsAndEvents = () => {
    return (
        <section className="lg:pt-10 bg-[linear-gradient(180deg,#EDDEF0_66.66%,#FFFFFF_100.88%)]">
            <div className="container">
                <div className="space-y-6 md:space-y-10 lg:space-y-20">
                    <Pagination />
                    <div className="lg:max-w-220.5 mx-auto text-center space-y-3">
                        <h2>News & Events</h2>
                        <p>
                            Learn about our recent works and insights on health issues. Get a
                            deeper understanding of the human body and mind, how you can save
                            yourself from the life hampering issues and keep your family sound
                            and healthy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;
