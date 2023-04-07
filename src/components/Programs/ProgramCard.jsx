import React from "react";
import { StyledButton } from "../styles/Button.styled";
import { BsFillPlayCircleFill as PlayIcon } from "react-icons/bs";
import {
  CardDetails,
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,
  StyledCard,
} from "../styles/Card.styled";

const ProgramCard = ({ img, title, details, imgStart, line }) => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart} line={line}>
        <CardImg src={img} alt={title} />
      </CardImage>
      <CardDetails>
        <SectionCardTitle>{title}</SectionCardTitle>
        <SectionCardDetails>{details}</SectionCardDetails>
        <StyledButton>
          Learn More <PlayIcon />
        </StyledButton>
      </CardDetails>
    </StyledCard>
  );
};

export default ProgramCard;
