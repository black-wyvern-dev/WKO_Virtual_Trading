import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    txt: {
        fontFamily: 'Electrolize',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '40px',
        color: 'rgb(102,102,102)',  
        margin: '5px 80px 0 40px',
    },
    tab: {
        fontWeight: 'bold',
        fontSize: '28px',
        color: 'rgb(0,201,201)',
        marginLeft: '40px',
    },
    container: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
    },
  }));

const Display = (props) => {
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <span
        className={classes.txt}
        {...props}
        >
        TRADING
        </span>   
        <div style={{'marginTop': '10px'}}>
            <span
            className = {classes.tab}
            >
                06.00 GMT
            </span>
            <span
            className = {classes.tab}
            >
                01/01/21
            </span>
            <span
            className = {classes.tab}
            >
                ENG (UK)
            </span>
        </div>
    </div>
    )
};
  
  export default Display;
  