import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 !important',
    marginBottom: '8px !important',
  },
  root: {
    flexGrow: 1,
    margin: '0 !important',
    padding: '0 !important',
  },
  block: {
    color: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& input': {
      textAlign: 'center',
      borderRight: '1px solid rgb(82,82,82)',
      backgroundColor: 'rgb(46,46,46)',
      color: 'white',
      height: '100%',
    },
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
    fontWeight: 'bold',
  },
}));

const CreditPane = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <Box 
        sx={{
          minHeight: '100%',
          py: 3,
          px: 0,
          my: 1,
          // border: '1px solid white',
          // borderColor: 'border.lightgray',
          // backgroundColor: 'background.secondary',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
        className={ classes.root }
      >
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid item xs={1.42}/>
          <Grid
            item
            xs={4}
            style={{
              padding: '0 !important',
              border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Box
              className={classes.block}
              sx={{
                flexDirection: 'row',
                padding: '0 !important',
              }}
            >
              <Box
                className={classes.block}
                sx={{
                  flex: 0.8,
                  borderRight: '1px solid white',
                  borderColor: 'border.lightgray',
                  backgroundColor: 'background.secondary',
                }}
              >
                BUY
              </Box>
              <Box
                className={classes.block}
                sx={{
                flex: 1,
                borderRight: '1px solid white',
                borderColor: 'border.lightgray',
                backgroundColor: 'background.secondary',
                height: '50px',
              }}>
                WKO Credits
              </Box>
              <Box
                className={classes.block}
                sx={{
                flex: 1,
                backgroundColor: 'background.secondary',
                height: '50px',
                fontWeight: 'normal',
              }}>
                New Balance
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid item xs={1.42}/>
          <Grid
            item
            xs={4}
            style={{
              padding: '0 !important',
              border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Box
              className={classes.block}
              sx={{
                flexDirection: 'row',
                padding: '0 !important',
              }}
            >
              <Box
                className={classes.block}
                sx={{
                  flex: 0.8,
                  fontWeight: 'normal',
                  borderRight: '1px solid white',
                  borderColor: 'border.lightgray',
                  backgroundColor: 'background.lightGray',
                }}
              >
                100.00
              </Box>
              <Box
                className={classes.block}
                sx={{
                flex: 1,
                fontWeight: 'normal',
                borderRight: '1px solid white',
                borderColor: 'border.lightgray',
                backgroundColor: 'background.secondary',
                height: '50px',
              }}>
                Premium
              </Box>
              <Box
                className={classes.block}
                sx={{
                flex: 1,
                fontWeight: 'normal',
                backgroundColor: 'background.secondary',
                height: '50px',
              }}>
                300.00
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid
            item
            xs={4}
            style={{
              padding: '0 !important',
              border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Box
              className={classes.block}
              sx={{
                flexDirection: 'row',
                padding: '0 !important',
              }}
            >
              <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  flex: 0.88,
                  backgroundColor: 'rgb(102,102,102)',
                }}
              >
                CONFIRM
              </Button>
              <InputBase
                className={classes.block}
                style={{
                  padding: '5px 0 6px 0',
                  flex: 0.82,
                  fontWeight: 'normal',
                }}
                defaultValue="10.00"
                inputProps={{ 'aria-label': 'naked' }}
              />
              <Box
                className={classes.block}
                sx={{
                flex: 1,
                backgroundColor: 'background.secondary',
                height: '50px',
              }}>
                GBP
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default CreditPane;
