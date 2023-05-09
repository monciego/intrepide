import theFounder from './assets/the-founder.png';
import theProfessionals from './assets/the-professionals.png';

export type TAboutData = {
  id: number;
  img: string;
  subTitle: string;
  title: string;
  details: string;
  imgStart?: boolean;
};

export const aboutData: TAboutData[] = [
  {
    id: 1,
    img: theFounder,
    subTitle: 'THE BEGINNING',
    title: 'THE FOUNDER',
    details:
      'Expect high-vitality quick paced exercises that leave each muscle shaking. Intrepide was established in 2012 by Jericho Bantiquete and now have two New York City  areas with a third in transit! As Founder, we will probably move the focal point of wellness from “me” to “we” by utilizing the group based exercise to saddle the inspiration, network, and responsibility that improve for an affair.',
    imgStart: true,
  },
  {
    id: 2,
    img: theProfessionals,
    subTitle: 'WHO WE ARE',
    title: 'THE PROFESSIONALS',
    details:
      'Resolved to discover an answer, sprinter and wellness industry veteran Paul Toback, collaborated with another wellness industry veteran, Steven Lenz. Paul had been a senior wellness official for over 10 years. As Chairman, previous president and CEO of the Fitness club , the biggest, traded on an open market gym organization on the planet, Jack Paul comprehends the needs and needs of gym clients.',
  },
];
