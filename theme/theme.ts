import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#1f2260',
    primaryLight: '#2b3087',
    primaryDark: '#131439',
    secondary: '#ffa800',
    secondaryLight: '#ffb933',
    secondaryDark: '#cc8600',
    error: '#dc2626',
  },
  buttons: {
    default: {
      color: 'primary',
      bg: 'secondary',
      ':hover': {
        bg: 'secondaryLight',
      },
    },
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    gray: {
      color: 'background',
      bg: 'gray',
    },
  },
});

export type ExactTheme = typeof theme;
export { theme };
