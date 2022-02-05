import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  ProgramCardDetails,
  ProgramDetails,
  ProgramImage,
  ProgramImg,
  ProgramTitle,
  StyledProgramCard,
} from "../styles/Program.styled";
import { BsFillPlayCircleFill as PlayIcon } from "react-icons/bs";

const ProgramCard = ({ img, title, details, imgStart }) => {
  console.log(imgStart);
  return (
    <StyledProgramCard imgStart={imgStart}>
      <ProgramImage imgStart={imgStart}>
        <ProgramImg src={img} alt={title} />
      </ProgramImage>
      <ProgramCardDetails>
        <ProgramTitle>{title}</ProgramTitle>
        <ProgramDetails>{details}</ProgramDetails>
        <StyledButton>
          Learn More <PlayIcon />
        </StyledButton>
      </ProgramCardDetails>
    </StyledProgramCard>
  );
};

export default ProgramCard;
