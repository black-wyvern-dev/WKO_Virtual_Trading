import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

const HandlePane = () => {
  const [activeOrder, setActiveOrder] = useState('turnover');
  const [toggleMonth, setToggleMonth] = useState(false);
  const [toggleYear, setToggleYear] = useState(false);
  const [dateMode, setDateMode] = useState('alltime');
  const [byMonth, setByMonth] = useState(0);
  const [byYear, setByYear] = useState(0);

  const classes = useStyles();
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const yearArray = [2022, 2021, 2020, 2019, 2018];

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
          <Grid
            item
            xs={6}
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
                  borderRight: '1px solid rgb(82, 82, 82)',
                  flex: 2,
                  backgroundColor: (activeOrder === 'turnover') ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
                }}
                onClick={() => setActiveOrder('turnover')}
              >
                TURNOVER
              </Button>
              <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  borderRight: '1px solid rgb(82, 82, 82)',
                  padding: '0 !important',
                  flex: 2,
                  backgroundColor: (activeOrder === 'profit') ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
                }}
                onClick={() => setActiveOrder('profit')}
              >
                PROFIT
              </Button>
              <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  flex: 2,
                  backgroundColor: (activeOrder === 'ppss') ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
                }}
                onClick={() => setActiveOrder('ppss')}
              >
                PPSS
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid
            item
            xs={2}
            style={{
              padding: '0 !important',
              // border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  border: '1px solid rgb(82, 82, 82)',
                  flex: 1,
                  height: '100%',
                  backgroundColor: (dateMode === 'month') ? 'rgb(102,102,102)' : 'rgb(46, 46, 46)',
                }}
                onClick={() => {
                  setDateMode('month');
                  setByYear(0);
                  setToggleMonth(!toggleMonth);
                  if(dateMode !== 'month') setToggleMonth(true);
                  if(byMonth === 0) setByMonth(1);
                }}
              >
                MONTH
              </Button>
          </Grid> 
          <Grid
            item
            xs={10}
            style={{
              padding: '0 !important',
              // border: '1px solid rgb(82, 82, 82)',
            }}
          >
            {
              !toggleMonth ? <></> :
              <Box
                className={classes.block}
                sx={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  padding: '0 !important',
                }}
              >
                {
                  monthArray.map((each) => {
                    return (
                      <Button
                      size="medium"
                      className={classes.button}
                      style={{
                        color: 'white',
                        border: '1px solid rgb(82, 82, 82)',
                        padding: '0 !important',
                        flex: 1,
                        maxWidth: '60px',
                        backgroundColor: (byMonth === each) ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
    
                      }}
                      onClick={() => {
                        setByMonth(each);
                        setDateMode('month');
                        setByYear(0);
                      }}
                    >
                      {each}
                    </Button>
                    )
                  })
                }
              </Box>
            }
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid
            item
            xs={2}
            style={{
              padding: '0 !important',
              // border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  border: '1px solid rgb(82, 82, 82)',
                  height: '100%',
                  flex: 1,
                  backgroundColor: (dateMode === 'year') ? 'rgb(102,102,102)' : 'rgb(46, 46, 46)',
                }}
                onClick={() => {
                  setToggleYear(!toggleYear);
                  if(dateMode !== 'year') setToggleYear(true);
                  setDateMode('year');
                  setByMonth(0);
                  if (byYear === 0) setByYear(yearArray[0]);
                }}
              >
                YEAR
              </Button>
          </Grid> 
          <Grid
            item
            xs={10}
            style={{
              padding: '0 !important',
              // border: '1px solid rgb(82, 82, 82)',
            }}
          >
            {
              !toggleYear ? <></> :
              <Box
                className={classes.block}
                sx={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  padding: '0 !important',
                }}
              >
                {
                  yearArray.map((each) => {
                    return (
                      <Button
                      size="medium"
                      className={classes.button}
                      style={{
                        color: 'white',
                        border: '1px solid rgb(82, 82, 82)',
                        padding: '0 !important',
                        flex: 1,
                        maxWidth: '60px',
                        backgroundColor: (byYear === each) ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
    
                      }}
                      onClick={() => {
                        setByYear(each);
                        setByMonth(0);
                        setDateMode('year');
                      }}
                    >
                      {each}
                    </Button>
                    )
                  })
                }
              </Box>
            }
          </Grid>
        </Grid>
        <Grid
          container
          style={{margin: '0 !important', width: '100%'}}
        >
          <Grid
            item
            xs={2}
            style={{
              padding: '0 !important',
              // border: '1px solid rgb(82, 82, 82)',
            }}
          >
            <Button
                size="medium"
                className={classes.button}
                style={{
                  color: 'white',
                  padding: '0 !important',
                  border: '1px solid rgb(82, 82, 82)',
                  flex: 1,
                  backgroundColor: (dateMode === 'alltime') ? 'rgb(102,102,102)' : 'rgb(46,46,46)',
                }}
                onClick={() => {
                  setDateMode('alltime');
                  setByMonth(0);
                  setByYear(0);
                }}
              >
                ALL TIME
              </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default HandlePane;
