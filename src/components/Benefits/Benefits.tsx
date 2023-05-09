import {
  Benefit,
  BenefitsImage,
  BenefitsImg,
  BenefitsList,
  BenefitsLists,
  CheckIcon,
  SectionBenefits,
  BenefitsDetails,
  BenefitsImageContainer,
} from '@/components/styles/Benefits.styled';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/styles/SectionHeaders.styled';
import { Section } from '@/components/styles/Sections.styled';
import { benefitsData } from '@//benefitsData';
import BenefitImg from '@/assets/benefits-img.png';

const Benefits = (): JSX.Element => {
  return (
    <Section>
      <SectionBenefits>
        <BenefitsDetails>
          <SectionTitle textDefault={true}>the benefits</SectionTitle>
          <SectionDescription textDefault={true}>
            Our specialists are very prepared and fit the bill to furnish you
            with shape centered alterations that will push you as far as
            possible without bargaining your security.
          </SectionDescription>
          <BenefitsLists>
            {benefitsData.map((benefit) => {
              return (
                <BenefitsList key={benefit.id}>
                  <CheckIcon />
                  <Benefit>{benefit.benefit} </Benefit>
                </BenefitsList>
              );
            })}
          </BenefitsLists>
        </BenefitsDetails>
        <BenefitsImageContainer>
          <BenefitsImage>
            <BenefitsImg src={BenefitImg} alt='benefit image' />
          </BenefitsImage>
        </BenefitsImageContainer>
      </SectionBenefits>
    </Section>
  );
};

export default Benefits;
