import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CCButton from 'src/components/elements/CCButton';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 80px !important',
    flexGrow: 1,
    margin: '0 !important',
    marginTop: '30px !important',
    width: '100%',
    height: '100%',
    fontFamily: 'Electrolize',
    // fontWeight: 'bold',
    fontSize: '16px',
  },
  block: {
    color: 'white',
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    color: 'white',
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    color: 'white',
    width: '100%',
    height: '50px !important',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 !important',
    fontFamily: 'Electrolize !important',
    fontSize: '16px !important',
  },
  cell: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'flex-end',
    padding: '0 !important',
  }
}));

const TradePane = (props) => {
  const classes = useStyles();

  const handlePauseBtnClicked = () => {
    if(props.onPaused !== undefined) props.onPaused();
    console.log('paused');
  }

  return (
      <Grid
        container
        spacing={1}
        className={ classes.container }
      >
        <Grid item className={ classes.cell } xs={1.5} >
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.lightGray',
            }}
          >
            1.31
          </Box>
          <CCButton
            className={classes.button}
            style={{
              padding: '0',
              maxWidth: '100% !important',
            }}
            containerStyle={{
              border: '1px solid white',
              borderColor: 'border.lightgray',
            }}
            color={'text.white'}
            backgroundColor={'background.red'}
            text="PAUSE"
            falshTime='1s'
            onClick={handlePauseBtnClicked}
          />
        </Grid>
        <Grid item className={ classes.cell } xs  />
        <Grid item className={ classes.cell } xs={1.5} >
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.default',
            }}
          >
            OPEN
          </Box>
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.lightblue',
            }}
          >
            116.64
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5} >
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.default',
            }}
          >
            CLOSED
          </Box>
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.red',
            }}
          >
            0.45
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5} >
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.default',
            }}
          >
            TOTAL
          </Box>
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.lightblue',
            }}
          >
            116.92
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs  />
        <Grid item className={ classes.cell } xs={1.5} >
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.lightGray',
            }}
          >
            31.43
          </Box>
          <CCButton
            className={classes.button}
            style={{
              padding: '0',
              maxWidth: '100% !important',
            }}
            containerStyle={{
              border: '1px solid white',
              borderColor: 'border.lightgray',
            }}
            color={'text.white'}
            backgroundColor={'background.lightblue'}
            text="PLAY"
            falshTime='1s'
            theme="light"
            // onClick={handlePauseBtnClicked}
          />
        </Grid>

      </Grid>
  )
};

export default TradePane;
