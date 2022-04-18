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
      lightblue: 'rgb(0,201,201)',
      darkblue: 'rgb(19,79,92)',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: 'rgb(0,201,201)'
    },
    dark: {
      contrastText: '#000',
      main: '#fff',
    },
    light: {
      contrastText: '#fff',
      main: '#000',
    },
    text: {
      primary: 'rgb(0,201,201)',
      secondary: '#6b778c',
      white: '#FFF',
      black: '#000',
    },
    border: {
      default: 'rgb(32,32,32)',
      lightgray: 'rgb(82,82,82)',
    }
  },
  shadows,
  spacing: 8,
  typography
});

export default theme;
