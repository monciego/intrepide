import { StyledButton } from '@/components/styles/Button.styled';
import { BsFillPlayCircleFill as PlayIcon } from 'react-icons/bs';
import {
  CardDetails,
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,
  StyledCard,
} from '@/components/styles/Card.styled';
import { TProgramData } from '@/programData';

const ProgramCard = ({
  img,
  title,
  details,
  imgStart,
  line,
}: TProgramData): JSX.Element => {
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
