import { TAboutData } from '@/aboutData';
import {
  CardDetails,
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,
  SectionLink,
  StyledCard,
  SubTitle,
} from '@/components/styles/Card.styled';
import { HiOutlineArrowNarrowRight as Arrow } from 'react-icons/hi';

export const AboutCard = ({
  img,
  title,
  subTitle,
  details,
  imgStart,
}: TAboutData): JSX.Element => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart}>
        <CardImg src={img} alt={title} />
      </CardImage>
      <CardDetails>
        <SubTitle>{subTitle}</SubTitle>
        <SectionCardTitle>{title}</SectionCardTitle>
        <SectionCardDetails>{details}</SectionCardDetails>
        <SectionLink>
          Learn More <Arrow />
        </SectionLink>
      </CardDetails>
    </StyledCard>
  );
};

export default AboutCard;
