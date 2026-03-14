import Image from "next/image";
import React from "react";

const OurEssence = ({id, title, desc, imageSrc}) => {
  return (
    <div className={`flex flex-col md:items-center gap-6 md:gap-8 lg:gap-10 ${id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="rounded-lg overflow-hidden flex-1">
        <Image className="w-full" src={imageSrc} width={100} height={100} alt={`${title} img`} />
      </div>
      <div className="pt-0 py-4 lg:py-6 space-y-4 lg:space-y-6 flex-1">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OurEssence;
