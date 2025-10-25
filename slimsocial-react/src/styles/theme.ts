import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { FACEBOOK_COLORS } from '../utils/constants';

const getThemeOptions = (darkMode: boolean): ThemeOptions => ({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: FACEBOOK_COLORS.official,
    },
    secondary: {
      main: '#42a5f5',
    },
    background: {
      default: darkMode ? FACEBOOK_COLORS.black : '#ffffff',
      paper: darkMode ? FACEBOOK_COLORS.darkBlue : '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? FACEBOOK_COLORS.darkBlue : FACEBOOK_COLORS.official,
        },
      },
    },
  },
});

export const createAppTheme = (darkMode: boolean) => createTheme(getThemeOptions(darkMode));
