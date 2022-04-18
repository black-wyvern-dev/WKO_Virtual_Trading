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

const RankTable = () => {
  const [historyData, setHistoryData] = useState([
    {
      rowBackground: 'background.lightGray',
      rowColor: 'text.white',
      position: { value: '5', },
      username: { value: 'JONO', },
      cc: { value: 'GB', },
      turnover: { value: '3000', },
      total: { value: '15200', },
    },
    {
      rowBackground: 'background.secondary',
      rowColor: 'text.white',
      position: { value: '6', },
      username: { value: 'MAR1', },
      cc: { value: 'CN', },
      turnover: { value: '2860', },
      total: { value: '', },
    },
    {
      rowBackground: 'background.secondary',
      rowColor: 'text.white',
      position: { value: '7', },
      username: { value: 'DANMAN', },
      cc: { value: 'IT', },
      turnover: { value: '2690', },
      total: { value: '', },
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
          // border: '1px solid white',
          // borderColor: 'border.default',
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
          <Grid item xs={1.5}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                border: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              POSITION P
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                border: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              USERNAME
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                border: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              CC
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                border: '1px solid white',
                borderColor: 'border.lightgray',
                backgroundColor: 'background.lightGray',
              }}
            >
              TURNOVER
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                border: '1px solid white',
                borderColor: 'border.lightgray',
              }}
            >
              TOTAL P
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              className={classes.block}
              sx={{
                height: '40px',
                padding: '0 !important',
                backgroundColor: 'background.default',
              }}
            >
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
                // border: '1px solid white',
                // borderColor: 'border.default',
                fontFamily: 'Roboto',
                fontSize: '16px',
              }}
              className={ classes.root }
            >
              <Grid
                container
                style={{margin: '0 !important', width: '100%'}}
              >
                <Grid item xs={1.5}>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      border: '1px solid white',
                      borderColor: 'border.lightgray',
                      // backgroundColor: `${eachData.cc.background ?? 'unset'}`
                    }}
                  >
                    {eachData.position.value}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      border: '1px solid white',
                      borderColor: 'border.lightgray',
                    }}
                  >
                    {eachData.username.value}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      border: '1px solid white',
                      borderColor: 'border.lightgray',
                    }}
                  >
                    {eachData.cc.value}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      border: '1px solid white',
                      borderColor: 'border.lightgray',
                    }}
                  >
                    {eachData.turnover.value}
                  </Box>
                </Grid>
                { index === 0 ? (
                  <Grid item xs={1.5}>
                    <Box
                      className={classes.block}
                      sx={{
                        height: '40px',
                        padding: '0 !important',
                        border: '1px solid white',
                        borderColor: 'border.lightgray',
                      }}
                    >
                      {eachData.total.value}
                    </Box>
                  </Grid>
                ) : (
                  <Grid item xs>
                    <Box
                      className={classes.block}
                      sx={{
                        height: '40px',
                        padding: '0 !important',
                        backgroundColor: 'background.default',
                      }}
                    >
                    </Box>
                  </Grid>
                )}
                <Grid item xs>
                  <Box
                    className={classes.block}
                    sx={{
                      height: '40px',
                      padding: '0 !important',
                      backgroundColor: 'background.default',
                    }}
                  >
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

export default RankTable;
