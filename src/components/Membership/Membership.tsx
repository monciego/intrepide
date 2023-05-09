import { useState } from 'react';
import { Section } from '@/components/styles/Sections.styled';
import {
  MembershipCards,
  MembershipChoose,
  MembershipChooseText,
  ToggleInput,
  ToggleLabel,
} from '@/components/styles/Membership.styled';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/styles/SectionHeaders.styled';
import MembershipCard from '@/components/Membership/MembershipCard';
import { membershipCarDatas } from '@/membershipCardData';

const Membership = (): JSX.Element => {
  const [annualy, setAnually] = useState(false);

  const annualyFunction = () => {
    setAnually((prev) => !prev);
  };

  return (
    <Section id='memberships'>
      <SectionTitle>MEMBERSHIP PLANS</SectionTitle>
      <SectionDescription>
        We offer a range of membership options designed to help you reach your
        fitness goals, with an emphasis on individual programs.
      </SectionDescription>
      <MembershipChoose>
        <MembershipChooseText>BILL MONTHLY</MembershipChooseText>
        <ToggleInput id='switch' type='checkbox' />
        <ToggleLabel
          htmlFor='switch'
          title='Toggle'
          onClick={annualyFunction}
        />
        <MembershipChooseText>BILL ANUALLY</MembershipChooseText>
      </MembershipChoose>
      <MembershipCards>
        {membershipCarDatas.map((membershipCard) => {
          return (
            <MembershipCard
              key={membershipCard.id}
              {...membershipCard}
              annualyFunction={annualy}
            />
          );
        })}
      </MembershipCards>
    </Section>
  );
};

export default Membership;
