import {
  FooterDescription,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterCompanyDetails,
  FooterSectionLink,
  FooterLink,
  FooterList,
  FooterSectionsTitle,
  FooterLine,
  Copyright,
  LegalLinks,
  LegalLink,
} from '@/components/styles/Footer.styled';
import { Section } from '@/components/styles/Sections.styled';

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <Section>
      <FooterSection>
        <FooterCompanyDetails>
          <FooterLogo>INTREPIDE</FooterLogo>
          <FooterDescription>
            Intrepide is your new home in boutique wellness. We join the
            dependable standards of Pilates with forefront development to give
            you the most out of each exercise.
          </FooterDescription>
        </FooterCompanyDetails>
        <FooterSections>
          <FooterSectionLink>
            <FooterSectionsTitle>Company</FooterSectionsTitle>
            <FooterList>
              <FooterLink
                target='__blank'
                rel='noopener noreferrer'
                href='https://jerichobantiquete.netlify.app/'
              >
                About us
              </FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='#0'>Career</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='mailto:jerichobantiquete@gmail.com'>
                Contact us
              </FooterLink>
            </FooterList>
          </FooterSectionLink>
          <FooterSectionLink>
            <FooterSectionsTitle>Membership</FooterSectionsTitle>
            <FooterList>
              <FooterLink href='#0'>Education</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='#0'>Member Policies</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='#0'>Personal Training</FooterLink>
            </FooterList>
          </FooterSectionLink>
          <FooterSectionLink>
            <FooterSectionsTitle>Gym</FooterSectionsTitle>
            <FooterList>
              <FooterLink href='#0'>View all gyms</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='#0'>Find a Gym</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href='#0'>locations</FooterLink>
            </FooterList>
          </FooterSectionLink>
        </FooterSections>
      </FooterSection>
      <FooterLine />
      <Copyright>© {year} All Rights Reserved</Copyright>

      <LegalLinks>
        <LegalLink>Privacy Policy</LegalLink>
        <LegalLink>Terms of Use</LegalLink>
        <LegalLink>Corporate Social Responsibility</LegalLink>
        <LegalLink>Legal</LegalLink>
      </LegalLinks>
    </Section>
  );
};

export default Footer;
