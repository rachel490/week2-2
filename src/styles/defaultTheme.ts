import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primaryPurple: '#794AF1',
    lightPurple: '#9E81EA',
    whiteGrey: '#F6F6F6',
    white: '#FFFFFF',

    dimmGray: 'rgba(19, 19, 19, 0.49);',
    darkGrey: '#3B3B3D',
    mediumGrey: '#7B7B83',
    black: '#000000',
  },
  shadow: 'drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.1));',
  border: {
    radius: '20px',
  },
  fontSize: {
    xsmall: '10px',
    small: '12px',
    original: '14px',
    medium: '16px',
  },
  fontWeight: {
    normal: 400,
    bolder: 500,
    bold: 700,
  },
};

export default theme;
