import React from "react";

import { Section } from ".././styles/Sections.styled";
import {
  MembershipCards,
  MembershipChoose,
  MembershipChooseText,
  ToggleInput,
  ToggleLabel,
} from "../styles/Membership.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import MembershipCard from "./MembershipCard";
import { membershipCarDatas } from "../../membershipCardData";

const Membership = () => {
  return (
    <Section id="memberships">
      <SectionTitle>MEMBERSHIP PLANS</SectionTitle>
      <SectionDescription>
        We offer a range of membership options designed to help you reach your
        fitness goals, with an emphasis on individual programs.
      </SectionDescription>
      <MembershipChoose>
        <MembershipChooseText>BILL MONTHLY</MembershipChooseText>
        <ToggleInput id="switch" type="checkbox" />
        <ToggleLabel htmlFor="switch" title="Toggle" />
        <MembershipChooseText>BILL ANUALLY</MembershipChooseText>
      </MembershipChoose>
      <MembershipCards>
        {membershipCarDatas.map((membershipCard) => {
          return <MembershipCard key={membershipCard.id} {...membershipCard} />;
        })}
      </MembershipCards>
    </Section>
  );
};

export default Membership;
