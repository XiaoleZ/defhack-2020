import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#96CC68',
      main: '#188266',
      dark: '#00494A',
      contrastText: 'white',
    },
    secondary: {
      light: '#95DBE5',
      main: '#078282',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
    neutral: {
      main: '#ebfafc',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;
