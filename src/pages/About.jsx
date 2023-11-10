import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutVcaition from "../components/AboutVcaition";
import CustomerCount from "../components/CustomerCount";
import AboutCart from "../components/AboutCart";
import AboutTeam from "../components/AboutTeam";

const About = () => {
  return (
    <>
      <div className="">
        <div>
          <AboutBanner />
          <AboutVcaition />
          <CustomerCount />
          <AboutCart />
          <AboutTeam />
        </div>
      </div>
    </>
  );
};

export default About;
