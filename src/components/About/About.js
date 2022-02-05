import React from "react";
import { AboutCards, AboutSection } from "../styles/About.styled";
import { SectionTitle } from "../styles/SectionHeaders.styled";
import { aboutData } from "../../aboutData";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>The leading fitness experts</SectionTitle>
      <AboutCards>
        {aboutData.map((about) => (
          <AboutCard key={about.id} {...about} />
        ))}
      </AboutCards>
    </AboutSection>
  );
};

export default About;
