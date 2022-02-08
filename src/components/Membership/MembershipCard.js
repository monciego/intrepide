import React from "react";
import {
  MembershipPrice,
  MembershipStyledCard,
  MembershipTier,
  MembershipCardPer,
  MembershipIncludesTitle,
  MembershipList,
  MembershipIncluded,
  MembershipNotIncluded,
  MembershipCardCTA,
  MembershipListContainer,
  PopularPricing,
} from "../styles/MembershipCard.styled";

const MembershipCard = ({
  tier,
  price,
  membershipIncludes,
  primier,
  anuallyPrice,
  annualyFunction,
}) => {
  return (
    <MembershipStyledCard>
      {primier && <PopularPricing>popular pricing</PopularPricing>}
      <MembershipTier>{tier}</MembershipTier>
      <MembershipPrice>
        ${annualyFunction ? anuallyPrice : price}
        <MembershipCardPer>
          / {annualyFunction ? " year" : " mo"}
        </MembershipCardPer>
      </MembershipPrice>
      <MembershipIncludesTitle>What's included</MembershipIncludesTitle>
      <MembershipListContainer>
        {membershipIncludes.map((include) => {
          return (
            <MembershipList key={include.id}>
              {include.included ? (
                <MembershipIncluded />
              ) : (
                <MembershipNotIncluded />
              )}
              {include.membershipIncludes}
            </MembershipList>
          );
        })}
      </MembershipListContainer>

      <MembershipCardCTA primier={primier}>start training</MembershipCardCTA>
    </MembershipStyledCard>
  );
};

export default MembershipCard;
