import React from "react";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { programData } from "../../programData";
import ProgramCard from "./ProgramCard";
import { Section, SectionCards } from "../styles/Sections.styled";

const Program = () => {
  return (
    <Section id="programs">
      <SectionTitle>our training programs</SectionTitle>
      <SectionDescription>
        {" "}
        Our specialists are very prepared and fit the bill to furnish you with
        shape centered alterations that will push you as far as possible without
        bargaining your security.
      </SectionDescription>
      <SectionCards>
        {programData.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default Program;
