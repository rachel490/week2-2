import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryPurple: string;
      lightPurple: string;
      whiteGrey: string;
      white: string;

      dimmGray: string;
      darkGrey: string;
      mediumGrey: string;
      black: string;
    };
    shadow: string;
    border: {
      radius: string;
    };
    fontSize: {
      xsmall: string;
      small: string;
      original: string;
      medium: string;
    };
    fontWeight: {
      normal: number;
      bolder: number;
      bold: number;
    };
  }
}
