import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 30px !important',
    flexGrow: 1,
    margin: '0 !important',
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
    '& input': {
      textAlign: 'center',
      border: '1px solid rgb(82,82,82)',
      backgroundColor: 'white',
      color: 'black',
      height: '100%',
    },
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

const SalesPane = () => {
  const classes = useStyles();

  return (
    // <Container maxWidth="lg" className={ classes.container }>
      <Grid
        container
        spacing={1}
        className={ classes.container }
      >
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.block}
            sx={{
              padding: '0 !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            UNIT VALUE
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.block}
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.white',
              color: 'text.black',
            }}
          >
            
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.label}
            sx={{
              padding: '0 !important',
              paddingBottom: '5px !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            QUANTITY
          </Box>
          <InputBase
            className={classes.block}
            style={{padding: '5px 0 6px 0'}}
            defaultValue="13"
            inputProps={{ 'aria-label': 'naked' }}
          />
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={ classes.label }
            sx={{
              padding: '0 !important',
              paddingBottom: '5px !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            TRADE
          </Box>
          <Button
            size="medium"
            className={classes.button}
            style={{
              color: 'white',
              padding: '0 !important',
              border: '1px solid rgb(82,82,82)',
              backgroundColor: 'rgb(32,32,32)',
            }}
          >
            BUY
          </Button>
          <Button
            size="medium"
            className={classes.button}
            style={{
              color: 'white',
              padding: '0 !important',
              border: '1px solid rgb(82,82,82)',
              backgroundColor: 'rgb(32,32,32)',
            }}
          >
            SELL
          </Button>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.label}
            sx={{
              padding: '0 !important',
              paddingBottom: '5px !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            PRICE
          </Box>
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.black',
            }}
          >
            10.00
          </Box>
          <Box
            className={ classes.button }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.black',
            }}
          >
            9.70
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.label}
            sx={{
              padding: '0 !important',
              paddingBottom: '5px !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            TOTAL
          </Box>
          <Box
            className={classes.block}
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.white',
              color: 'text.black',
            }}
          >
            38.8
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Button
            size="medium"
            className={classes.button}
            style={{
              color: 'black',
              padding: '0 !important',
              border: '1px solid rgb(32,32,32)',
              backgroundColor: 'white',
            }}
          >
            CONFIRM
          </Button>
        </Grid>
        <Grid item className={ classes.cell } xs={1.5}>
          <Box
            className={classes.block}
            sx={{
              padding: '0 !important',
              // border: '1px solid white',
              // borderColor: 'border.lightgray',
            }}
          >
            
          </Box>
        </Grid>
      </Grid>
    // </Container>
  )
};

export default SalesPane;
