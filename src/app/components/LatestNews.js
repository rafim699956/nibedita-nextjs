import React from "react";
import latestnewsimg1 from "../../../public/latestnewsimg1.png";
import latestnewsimg2 from "../../../public/latestnews2.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const LatestNews = () => {
  const latestNews = {
    sectionTitle: "Latest news",
    sectionDes:
      "To learn more about our approach and the quality of our services, explore our case studies section.",
    news: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet consect viverra morbi",
        des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
        img: latestnewsimg1,
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet consect viverra morbi",
        des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
        bgColor: "#FBBC10",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet consect viverra morbi",
        des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
        bgColor: "#9D5DA3",
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet consect viverra morbi",
        des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
        img: latestnewsimg2,
      },
    ],
  };
  return (
    <section className="bg-[#FBF7FC]">
      <div className="container space-y-6 md:space-y-8 lg:space-y-14">
        <div className="lg:max-w-195.5 mx-auto text-center space-y-4">
          <h2>{latestNews.sectionTitle}</h2>
          <p className="lg:max-w-[36.563rem] mx-auto lg:text-[1.25rem] lg:leading-8 text-black">
            {latestNews.sectionDes}
          </p>
        </div>
        <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.news &&
            latestNews.news.map((item) => (
              <div
                className={`flex flex-col lg:flex-row rounded-lg border border-[#E5E5E5] shadow-[0px_2px_12px_rgba(0,0,0,0.04)] overflow-hidden ${
                  item.img && "md:col-span-2"
                }`}
                key={item.id}
              >
                {item.img && (
                  <div className="shrink-0 lg:max-w-[23.188rem] w-full">
                    <Image
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt={`latest news ${item.id}`}
                      width={371}
                      height={304}
                    />
                  </div>
                )}
                <div
                  className={`grow ${
                    item.img
                      ? "bg-white pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 lg:pb-15 pl-6 pr-7.5 space-y-8"
                      : `py-8 md:py-10 lg:py-14 px-6 space-y-6`
                  }`}
                  style={{ backgroundColor: `${item.bgColor}` }}
                >
                  <div className={`${item.img ? "space-y-4" : "space-y-3"}`}>
                    <h5
                      className={`leading-7 ${
                        item.img ? "text-black" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p
                      className={`text-base leading-6.5 ${
                        item.img ? "text-[#5F5F5F]" : "text-white"
                      }`}
                    >
                      {item.des}
                    </p>
                  </div>
                  <div>
                    <Link
                      className={`font-medium flex items-center gap-1.5 text-base ${
                        item.img ? "text-black" : "text-white"
                      }`}
                      href={`/`}
                    >
                      Learn More <FaArrowRightLong className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
