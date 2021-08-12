import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    logo: {
        fontFamily: 'Electrolize',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '48px',
        color: 'rgb(0,201,201)',
    },
    symbol: {
        fontStyle: 'italic',
        fontSize: '16px',
        color: 'rgb(0,201,201)'
    }
  }));

const Logo = (props) => {
    const classes = useStyles();
    return (
    <>
      <span
        className={classes.logo}
        {...props}
      >
        WORLD KNOCKOUT
      </span>
      <span
        className = {classes.symbol}
        >
          Ⓡ
        </span>
    </>
    )
};
  
  export default Logo;
  