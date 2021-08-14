import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    height: '50px',
    display: 'flex',
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

const TradePane = () => {
  const classes = useStyles();

  return (
      <Grid
        container
        spacing={1}
        className={ classes.container }
      >
        <Grid item className={ classes.cell } xs={1.5} spacing={0}>
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
          <Button
            size="medium"
            className={classes.button}
            style={{
              color: 'white',
              padding: '0 !important',
              border: '1px solid rgb(82,82,82)',
              backgroundColor: 'rgb(116,0,0)',
            }}
          >
            PAUSE
          </Button>
        </Grid>
        <Grid item className={ classes.cell } xs spacing={0} />
        <Grid item className={ classes.cell } xs={1.5} spacing={0}>
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
        <Grid item className={ classes.cell } xs={1.5} spacing={0}>
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
        <Grid item className={ classes.cell } xs={1.5} spacing={0}>
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
        <Grid item className={ classes.cell } xs spacing={0} />
        <Grid item className={ classes.cell } xs={1.5} spacing={0}>
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
          <Button
            size="medium"
            className={classes.button}
            style={{
              color: 'white',
              padding: '0 !important',
              border: '1px solid rgb(82,82,82)',
              backgroundColor: 'rgb(19,79,92)',
            }}
          >
            PLAY
          </Button>
        </Grid>

      </Grid>
  )
};

export default TradePane;
