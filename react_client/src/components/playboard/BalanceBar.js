import React, {useState, useEffect} from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

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
}));

const BalanceBar = (props) => {
  const classes = useStyles();
  const [balance, setBalance] = useState(217.15);

  const balanceAmount = props.balanceAmount !== undefined ? props.balanceAmount : -1;

  useEffect(() => {
    if (balanceAmount !== -1) setBalance(balanceAmount);
  }, [balanceAmount]);

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
          borderColor: 'border.default',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '16px',
          marginBottom: '5px !important',
        }}
        className={ classes.root }
      >
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid
            item
            xs={3.6}
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
                borderColor: 'border.default',
              }}
            >
              <Box
                className={classes.block}
                sx={{
                  flex: 1,
                  backgroundColor: 'background.secondary',
                }}
              >
                Trading Account
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1.4}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                borderRight: '1px solid white',
                borderColor: 'border.default',
              }}
            >
              
            </Box>
          </Grid>
          
          <Grid item xs={1.4}>
            <Box
              className={classes.block}
              sx={{
                padding: '0 !important',
                borderRight: '1px solid white',
                borderColor: 'border.default',
              }}
            >
              
            </Box>
          </Grid>
          <Grid item xs={2.8}>
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
                  backgroundColor: 'background.lightGray',
                }}
              >
                Balance: 
              </Box>
              <Box
                className={classes.block}
                sx={{
                  flex: 1,
                  borderRight: '1px solid white',
                  borderColor: 'border.default',
                  backgroundColor: 'background.lightGray',
                }}
              >
                {balance} TC
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2.8}>
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
                  borderColor: 'border.default',
                  backgroundColor: 'background.secondary',
                }}
              >
                P 139/1200
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default BalanceBar;
