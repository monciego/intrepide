import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      montserrat: string;
      merriweather: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      primaryBG: string;
      secondaryBG: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}

export const theme: DefaultTheme = {
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    merriweather: "'Merriweather', serif",
  },
  colors: {
    primary: '#FF0034',
    secondary: '#0736DB',
    tertiary: '#C2C2C2',
    primaryBG: '#111111',
    secondaryBG: '#181818',
  },
  breakpoints: {
    lg: '64rem',
    md: '58.125rem',
    sm: '48rem',
    xs: '31.25rem',
  },
};
