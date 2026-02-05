import React from "react";
import teamMember1 from "../../../public/teamMember1.png";
import teamMember2 from "../../../public/teamMember2.png";
import teamMember3 from "../../../public/teamMember3.png";
import teamMember4 from "../../../public/teamMember4.png";
import Link from "next/link";
import Image from "next/image";

const OurTeamMember = () => {
  const OurTeamMember = {
    sectionTitle: "Our team members",
    sectionDes:
      "We take pride in our team of highly accomplished professionals from diverse sectors, all committed to making a meaningful impact through their skills and passion.",
    teamMembers: [
      {
        id: 1,
        memberName: "Dr. Zeenat Sultana",
        jobtitle: "Program Director & DCEO",
        img: teamMember1,
      },
      {
        id: 2,
        memberName: "Dr. Nafisa Lira Huq",
        jobtitle: "Adjunct Faculty",
        img: teamMember2,
      },
      {
        id: 3,
        memberName: "Dr Rita Sen, PhD",
        jobtitle: "Head, Research and Documentation",
        img: teamMember3,
      },
      {
        id: 4,
        memberName: "Shamima Sultana",
        jobtitle: "Head, Research and Documentation",
        img: teamMember4,
      },
    ],
  };
  return (
    <section className="bg-white">
      <div className="container space-y-8 lg:space-y-14">
        <div className="lg:max-w-195.5 text-center mx-auto space-y-4">
          <h2>{OurTeamMember.sectionTitle}</h2>
          <p>{OurTeamMember.sectionDes}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {OurTeamMember.teamMembers &&
            OurTeamMember.teamMembers.map((item) => (
              <div
                key={item.id}
                className="min-h-105.5 relative rounded-lg overflow-hidden bg-[#0C0C0C] bg-no-repeat bg-cover bg-blend-luminosity"
              >
                <Image className="absolute" src={item.img} alt={item.memberName} width={297} height={422} />
                <div className="absolute w-full h-47 bottom-0 left-0 right-0 bg-[linear-gradient(179.4deg,rgba(217,217,217,0)_0.52%,#000000_82.38%)] z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 top-auto space-y-1.5 z-50">
                  <h6>
                    <Link
                      href="/"
                      className="font-outfit font-semibold text-[1.25rem] leading-6 text-white"
                    >
                      {item.memberName}
                    </Link>
                  </h6>
                  <p className="text-[#B579BC] text-sm leading-5">
                    {item.jobtitle}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMember;
