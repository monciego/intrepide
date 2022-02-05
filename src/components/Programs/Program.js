import React from "react";
import { ProgramCards, ProgramSection } from "../styles/Program.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { programData } from "../../programData";
import ProgramCard from "./ProgramCard";

const Program = () => {
  return (
    <ProgramSection id="programs">
      <SectionTitle>our training programs</SectionTitle>
      <SectionDescription>
        {" "}
        Our specialists are very prepared and fit the bill to furnish you with
        shape centered alterations that will push you as far as possible without
        bargaining your security.
      </SectionDescription>
      <ProgramCards>
        {programData.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </ProgramCards>
    </ProgramSection>
  );
};

export default Program;
