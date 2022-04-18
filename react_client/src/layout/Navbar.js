import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    tab: {
        fontFamily: 'Roboto',
        fontSize: '32px',
        color: 'rgb(0,201,201)',  
        flex: '1',
        textAlign: 'center',
        alignSelf: 'center',
        cursor: 'pointer',
        borderLeft: '2px solid rgb(32,32,32)',
        borderRight: '2px solid rgb(32,32,32)',
    },
    join: {
        background: 'rgb(19,79,92)',
        flex: '1',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '32px',
        color: '#FFF',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    login: {
        background: 'rgb(102,102,102)',
        flex: '1',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '32px',
        color: '#FFF',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    container: {
        backgroundColor: 'rgb(32,32,32)',      
        marginTop: '200px',
        width: '100%',
        height: '70px',
        position: 'fixed',
        right: '20px',
        zIndex: '10',
    },
    content: {
        backgroundColor: 'rgb(46,46,46)',      
        marginTop: '20px',
        width: '90%',
        margin: 'auto',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
    }
  }));

const Navbar = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div
                className={classes.tab}
                {...props}
                onClick={() => {
                    navigate('/playboard', { replace: false });
                  }}
            >
                How to Play
            </div>
            <div
                className={classes.tab}
                {...props}
            >
                The Rules
            </div>
            <div
                className={classes.tab}
                {...props}
            >
                WKO Credits
            </div>
            <div
                className={classes.tab}
                {...props}
                onClick={() => {
                    navigate('/leaderboard', { replace: false });
                  }}
            >
                WKO 100
            </div>
            <div
                className={classes.tab}
                {...props}
            >
                FAQ
            </div>
            <div
                className={classes.tab}
                {...props}
            >
                Contact
            </div>
            <div
                className={classes.join}
                {...props}
                onClick={() => {
                    navigate('/register', { replace: false });
                  }}
            >        
                <span style={{'borderLeft': '2px solid rgb(32,32,32)', 'borderRight': '2px solid rgb(32,32,32)'}}>
                    JOIN
                </span>
            </div>
            <div
                className={classes.login}
                {...props}                
                onClick={() => {
                  navigate('/login', { replace: false });
                }}
            >
                <span style={{'borderLeft': '2px solid rgb(32,32,32)', 'borderRight': '2px solid rgb(32,32,32)'}}>
                    LOG IN
                </span>
            </div>
        </div>
    </div>
    )
};
  
  export default Navbar;