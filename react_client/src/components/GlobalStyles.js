// import {  } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      backgroundColor: 'rgb(32,32,32)',
      height: '100%',
      width: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
      width: '100%'
    },
    input : {     
      '&:-internal-autofill-selected' : {
        backgroundColor: 'rgb(32,32,32) !important',      
      } 
    },
    '.MuiMenu-list': {
      backgroundColor: 'rgb(102, 102, 102) !important',
      border: '1px solid rgb(82, 82, 82) !important',
      padding: '0 !important',
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
