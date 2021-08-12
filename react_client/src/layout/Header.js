import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo from './Logo';
import Display from './Display';

const useStyles = makeStyles(theme => ({
  nav: {
    width: '100%',
    height: '200px',
    backgroundColor: 'rgb(32,32,32) !important',    
    marginRight: '20px'
  },  
  toolbar: {
    backgroundColor: 'rgb(46,46,46)',
    height: '100px',

    width: '90% !important',
    left: '50% !important',
    transform: 'translateX(-50%)',
    marginTop: '100px !important',
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
  <div>
    <AppBar
      className={classes.nav}
      elevation={0}
      {...props}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink style={{
          width: '30%',
        }} to="/">
          <Logo />
        </RouterLink>
        <Display />
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header;
