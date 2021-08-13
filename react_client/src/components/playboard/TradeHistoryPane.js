import React, { useState } from 'react';
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
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const TradeHistoryPane = () => {
  const [historyData, setHistoryData] = useState([
    {
      rowBackground: 'background.white',
      rowColor: 'text.black',
      cc: { value: 'US1', },
      trade: { value: 'BAL', },
      price: { value: '24.25', },
      quantity: { value: '10', },
      value: { value: '242.52', },
      cost: { value: '19.20', },
      open: { value: '223.30', },
      closed: { value: '', },
      total: { value: '223.30', },
    },
    {
      rowBackground: 'background.secondary',
      rowColor: 'text.white',
      cc: { value: 'US', background: 'background.lightblue', },
      trade: { value: 'OPEN', },
      price: { value: '24.25', },
      quantity: { value: '10', },
      value: { value: '242.52', },
      cost: { value: '19.20', },
      open: { value: '223.30', background: 'background.lightblue' },
      closed: { value: '0.00', background: 'background.black' },
      total: { value: '223.30', background: 'background.red' },
    },
    {
      rowBackground: 'background.lightGray',
      rowColor: 'text.white',
      cc: { value: 'ALL', },
      trade: { value: 'OPEN', },
      price: { value: '24.25', },
      quantity: { value: '11', },
      value: { value: '266.75', },
      cost: { value: '22.53', },
      open: { value: '244.22', background: 'background.lightblue' },
      closed: { value: '32.02', background: 'background.lightblue' },
      total: { value: '276.24', background: 'background.lightblue' },
    },
  ]);
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <Box 
        sx={{
          backgroundColor: 'background.secondary',
          color: 'white',
          minHeight: '100%',
          py: 3,
          px: 0,
          my: 1,
          border: '1px solid white',
          borderColor: 'border.default',
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
          <Grid item xs={0.8}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                borderRight: '1px solid white',
                borderColor: 'border.default',
              }}
            >
              CC
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
              TRADE
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
              PRICE
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
              QUANTITY
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
              VALUE
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
              COST
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
              OPEN
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
              CLOSED
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
              TOTAL
            </Box>
          </Grid>
        </Grid>
      </Box>
      { historyData.map((eachData, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: eachData.rowBackground,
                color: eachData.rowColor,
                minHeight: '100%',
                py: 3,
                px: 0,
                my: 1,
                border: '1px solid white',
                borderColor: 'border.default',
                fontFamily: 'Roboto',
                fontSize: '16px',
              }}
              className={ classes.root }
            >
              <Grid
                container
                style={{margin: '0 !important', width: '100%'}}
              >
                <Grid item xs={0.8}>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      borderRight: '1px solid white',
                      borderColor: 'border.default',
                      backgroundColor: `${eachData.cc.background ?? 'unset'}`
                    }}
                  >
                    {eachData.cc.value}
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
                    {eachData.trade.value}
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
                    {eachData.price.value}
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
                    {eachData.quantity.value}
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
                    {eachData.value.value}
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
                    {eachData.cost.value}
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
                      backgroundColor: `${eachData.open.background}`
                    }}
                  >
                    {eachData.open.value}
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
                      backgroundColor: `${eachData.closed.background}`
                    }}
                  >
                    {eachData.closed.value}
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
                      backgroundColor: `${eachData.total.background}`
                    }}
                  >
                    {eachData.total.value}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )
        })
      }
    </Container>
  )
};

export default TradeHistoryPane;
