import Image from "next/image";
import Link from "next/link";
import newsImage from "../../../public/newsandevent.png";
import React from "react";

const BlogPost = ({ title = "Blog Title" }) => {
    return (
        <div className="space-y-4 md:space-y-6 lg:space-y-8 blog-post">
            <div className="rounded-lg overflow-hidden">
                <Image className="hover:scale-[1.1] transition-all duration-300 ease-linear" src={newsImage} alt={title} width={403} height={248} priority />
            </div>
            <div className="space-y-2">
                <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                <h5>
                    <Link className="h5 hover:text-primary-600 transition-all duration-300 ease-linear" href={`/news-and-events/`}>
                        {title}
                    </Link>
                </h5>
            </div>
        </div>
    );
};

export default BlogPost;
