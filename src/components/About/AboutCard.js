import React from "react";
import {
  ProgramCardDetails,
  ProgramDetails,
  ProgramImage,
  ProgramImg,
  ProgramTitle,
  StyledProgramCard,
} from "../styles/Program.styled";
import { SectionLink, SubTitle } from "../styles/About.styled";
import { HiOutlineArrowNarrowRight as Arrow } from "react-icons/hi";

export const AboutCard = ({ img, title, subTitle, details, imgStart }) => {
  return (
    <StyledProgramCard imgStart={imgStart}>
      <ProgramImage imgStart={imgStart}>
        <ProgramImg src={img} alt={title} />
      </ProgramImage>
      <ProgramCardDetails>
        <SubTitle>{subTitle}</SubTitle>
        <ProgramTitle>{title}</ProgramTitle>
        <ProgramDetails>{details}</ProgramDetails>
        <SectionLink>
          Learn More <Arrow />
        </SectionLink>
      </ProgramCardDetails>
    </StyledProgramCard>
  );
};

export default AboutCard;
