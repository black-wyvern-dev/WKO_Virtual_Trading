import { colors } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(32,32,32)',
      secondary: 'rgb(46,46,46)',
      lightGray: 'rgb(102,102,102)',
      black: '#000',
      white: '#FFF',
      red: 'rgb(116,0,0)',
      darkblue: 'rgb(19,79,92)',
      lightblue: 'rgb(69,129,142)',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#5664d2'
    },
    text: {
      primary: 'rgb(0,201,201)',
      secondary: '#6b778c',
      white: '#FFF',
    }
  },
  shadows,
  typography
});

export default theme;
