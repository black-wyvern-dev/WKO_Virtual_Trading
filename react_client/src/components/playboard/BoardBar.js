import React, {useState} from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 !important',
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

const BoardBar = (props) => {
  const [creditPaneToggle, setCreditPaneToggle] = useState(false);

  const classes = useStyles();
  const handleBuyButton =
    ( props.onCreditPaneToggle != undefined ) ?
    () => {
      props.onCreditPaneToggle(creditPaneToggle);
      setCreditPaneToggle(!creditPaneToggle);
    }
    :
    () => {
      setCreditPaneToggle(!creditPaneToggle);
      console.log('CreditPaneToggled: ', creditPaneToggle);
    };

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <Box 
        sx={{
          backgroundColor: 'background.secondary',
          minHeight: '100%',
          py: 3,
          px: 0,
          my: 1,
          border: '1px solid white',
          borderColor: 'border.lightgray',
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
          <Grid
            item
            xs
            style={{
              padding: '0 !important',
            }}
          >
            <Box
              className={classes.block}
              sx={{
                flexDirection: 'row',
                padding: '0 !important',
                borderRight: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              <span
                style={{
                  flex: 1,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                WKO Credits
              </span>
              {/* <Box
                className={classes.block}
                sx={{
                  flex: 0.8,
                  backgroundColor: 'background.lightGray',
                }}
              >
                BUY
              </Box> */}
              <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  fontWeight: 'bold',
                  flex: 0.7,
                  backgroundColor: 'rgb(102,102,102)',
                }}
                onClick={handleBuyButton}
              >
                BUY
              </Button>
              <span style={{
                flex: 'auto',
                height: '50px',
              }}></span>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              className={classes.block}
              sx={{
                padding: '0 !important',
                borderRight: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              WKO Trading Platform
            </Box>
          </Grid>
          <Grid item xs>
          <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 !important',
                height: '100%',
              }}
            >
              <Box
                className={classes.block}
                sx={{
                  flex: 1,
                  borderRight: '1px solid white',
                  borderColor: 'border.lightgray',
                  backgroundColor: 'background.lightGray',
                }}
              >
                06.30 GMT
              </Box>
              <Box
                className={classes.block}
                sx={{
                  flex: 0.5,
                  borderRight: '1px solid white',
                  borderColor: 'border.lightgray',
                  backgroundColor: 'background.black',
                }}
              >
                CC
              </Box>
              <Box
                className={classes.block}
                sx={{
                  flex: 'auto',
                  height: '50px',
                }}
              >
                BUY
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default BoardBar;
