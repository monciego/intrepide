import React from "react";
import { SectionTitle } from "../styles/SectionHeaders.styled";
import { aboutData } from "../../aboutData";
import AboutCard from "./AboutCard";
import { Section, SectionCards } from "../styles/Sections.styled";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>The leading fitness experts</SectionTitle>
      <SectionCards>
        {aboutData.map((about) => (
          <AboutCard key={about.id} {...about} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default About;
