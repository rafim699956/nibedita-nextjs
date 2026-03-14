import React from "react";
import AboutNibedita from "../components/AboutNibedita";
import OurTeamMember from "../components/OurTeamMember";
import WholisticCare from "../components/WholisticCare";
import Coundown from "../components/Coundown";
import Faq from "../components/Faq";
import JoinUs from "../components/JoinUs";

const AboutUs = () => {
  return (
    <>
      <AboutNibedita />
      <WholisticCare />
      <Coundown />
      <OurTeamMember />
      <Faq/>
      <JoinUs />
    </>
  );
};

export default AboutUs;
