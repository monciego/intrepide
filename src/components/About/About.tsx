import { SectionTitle } from '@/components/styles/SectionHeaders.styled';
import { aboutData } from '@/aboutData';
import AboutCard from '@/components/About/AboutCard';
import { Section, SectionCards } from '@/components/styles/Sections.styled';

const About = (): JSX.Element => {
  return (
    <Section id='about'>
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
