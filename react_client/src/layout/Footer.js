import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#FFF',
        lineHeight: '1.8',
        textAlign: 'center',
    },
    sbuText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#FFF',
        lineHeight: '1.8',
        textAlign: 'center',
    },
    container: {
        marginTop: '100px',
        padding: '30px',
        // position: "fixed",
        // left: "0",
        // bottom: "0",
        height: '150px',
        width: '100%',
    }
  }));

const Footer = (props) => {
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <div 
        className={classes.txt}       
        {...props}
        >
            Important Note: World Knockout only uses virtual currency and no money or money’s worth can be won or lost by playing.
        </div>   
        <div className={classes.sbuText}>
            World Knockout Trading is the Trading name of World Knockout Ltd.
        </div>
        <div className={classes.sbuText}>
            A Company registered in England & Wales No. London W12
        </div>
        <div className={classes.sbuText}>
            Ⓒ2021 Rational Gaming Ltd. All Rights Reserved.
        </div>
    </div>
    )
};
  
export default Footer;