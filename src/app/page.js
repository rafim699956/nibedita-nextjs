import Image from "next/image";
import WhoWeAre from "./components/WhoWeAre";
import tabimg1 from "../../public/tabimg1.png";
import tabimg2 from "../../public/blogimg1.png";
import tabimg3 from "../../public/blogimg2.png";
import OurConcern from "./components/OurConcern";
import HistoryNibedita from "./components/HistoryNibedita";
import OurTeamMember from "./components/OurTeamMember";
import LatestNews from "./components/LatestNews";
import ContactUs from "./components/ContactUs";
import HomeHero from "./components/HomeHero";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function Home() {
  const whoWeAre = {
    navTabs: {
      tabBtn: [
        {
          id: 1,
          label: "Mission & Vision",
        },
        {
          id: 2,
          label: "Core Values",
        },
        {
          id: 3,
          label: "Objectives",
        },
      ],
      tabBody: [
        {
          id: 1,
          label: "Mission & Vision",
          tabImg: tabimg1,
          tabDesTitle1: "Mission",
          tabDes1:
            "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
          tabDesTitle2: "Vision",
          tabDes2:
            "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
        },
        {
          id: 2,
          label: "Core Values",
          tabImg: tabimg2,
          tabDesTitle1: "Core",
          tabDes1:
            "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
          tabDesTitle2: "Values",
          tabDes2:
            "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
        },
        {
          id: 3,
          label: "Objectives",
          tabImg: tabimg3,
          tabDesTitle1: "Objectives",
          tabDes1:
            "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
          tabDesTitle2: "Objectives Values",
          tabDes2:
            "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
        },
      ],
    },
  }
  return (
    <>
    <HomeHero/>
      {/* <WhoWeAre>
        <div className="flex flex-col lg:flex-row gap-9">
          <div className="inline-flex flex-col gap-3 max-w-[18.563rem] w-full shrink-0">
            {whoWeAre.navTabs.tabBtn &&
              whoWeAre.navTabs.tabBtn.map((btn) => (
              <Tabsection/>
              ))}
          </div>
          <div className="grow flex flex-col gap-6">
            {whoWeAre.navTabs.tabBody &&
              whoWeAre.navTabs.tabBody.map((item) => (
                <div key={item.id} className={`gap-6`}>
                  <div className="max-w-86 w-full shrink-0 lg:h-103 max-h-full rounded-2xl overflow-hidden">
                    <Image src={item.tabImg} alt={`tab img ${item.id}`} width={500} height={300} />
                  </div>
                  <div className="grow py-4 space-y-4 md:space-y-6 lg:space-y-10">
                    {item.tabDesTitle1 && (
                      <div className="space-y-2">
                        <h4>{item.tabDesTitle1}</h4>
                        <p>{item.tabDes1}</p>
                      </div>
                    )}
                    {item.tabDesTitle2 && (
                      <div className="space-y-2">
                        <h4>{item.tabDesTitle2}</h4>
                        <p>{item.tabDes2}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </WhoWeAre> */}
      <OurConcern />
      <HistoryNibedita />
      <OurTeamMember />
      <LatestNews />
      <ContactUs />
    </>
  );
}
