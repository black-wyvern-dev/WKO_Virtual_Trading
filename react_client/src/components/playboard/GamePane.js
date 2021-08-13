import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

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
    height: '51px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    color: 'black',
    width: '100%',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px !important',
  },
  cell: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'flex-end',
    padding: '0 !important',
  },
  stateCell: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'flex-end',
    padding: '3px !important',
    backgroundColor: 'rgb(32,32,32)',
  },
}));

const GamePane = () => {
  const [ccList, setCcList] = useState([
    '','','','AR','','','AW','','','',
    'BG','','','','','BS','','','','',
    '','CN','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','IT',
    '','','','','','','','','','',
    '','','','MT','','','','','','',
    '','','','','','','','PR','','',
    '','','','','','','','','','',
    'TT','','','US','','','','','','',
  ]);

  const classes = useStyles();

  const indexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const cellItemList = indexList.map((super_each, super_index) => {
    if(super_index > 9) return;
    return (
      <>
        <Grid key={super_index} item className={ classes.cell } xs={0.85} spacing={0}>
          <Box
            className={ classes.block }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.secondary',
            }}
          >
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={0.9} spacing={0} >
          <Box
            className={ classes.block }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.default',
              backgroundColor: 'background.default',
            }}
          >
          </Box>
        </Grid>
        {
          ccList.map((each, index) => {
            if ( (index * 1.0 / 10) < super_index || (index * 1.0 / 10) >= (super_index + 1) ) return <></>;
            return (
              <Grid key={index} item className={ classes.stateCell } xs={0.85} spacing={0}>
                <Box
                  className={ classes.button }
                  sx={{
                    backgroundColor: 'background.white',
                  }}
                >
                  {each}
                </Box>
              </Grid>
            )
          })
        }
        <Grid item className={ classes.cell } xs={0.9} spacing={0} >
          <Box
            className={ classes.block }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.default',
              backgroundColor: 'background.default',
            }}
          >
          </Box>
        </Grid>
        <Grid item className={ classes.cell } xs={0.85} spacing={0}>
          <Box
            className={ classes.block }
            sx={{
              padding: '0 !important',
              border: '1px solid white',
              borderColor: 'border.lightgray',
              backgroundColor: 'background.secondary',
            }}
          >
          </Box>
        </Grid>
      </>
    );
  });

  return (
      <Grid
        container
        spacing={1}
        className={ classes.container }
      >
        {
          indexList.map((each, index) => {
            return (
              <Grid key={index} item className={ classes.cell } xs={ (index == 1 || index == 12) ? 0.9 : 0.85} spacing={0}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: 'border.lightgray',
                    backgroundColor: 'background.secondary',
                  }}
                >
                </Box>
              </Grid>
            )
          })
        }
        {
          indexList.map((each, index) => {
            return (
              <Grid key={index} item className={ classes.cell } xs={ (index == 1 || index == 12) ? 0.9 : 0.85} spacing={0}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: (index == 0 || index == 13) ? 'border.lightgray' : 'border.default',
                    backgroundColor: (index == 0 || index == 13) ? 'background.secondary' : 'background.default',
                  }}
                >
                </Box>
              </Grid>
            )
          })
        }
        { cellItemList }
        {
          indexList.map((each, index) => {
            return (
              <Grid key={index} item className={ classes.cell } xs={ (index == 1 || index == 12) ? 0.9 : 0.85} spacing={0}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: (index == 0 || index == 13) ? 'border.lightgray' : 'border.default',
                    backgroundColor: (index == 0 || index == 13) ? 'background.secondary' : 'background.default',
                  }}
                >
                </Box>
              </Grid>
            )
          })
        }
        {
          indexList.map((each, index) => {
            return (
              <Grid key={index} item className={ classes.cell } xs={ (index == 1 || index == 12) ? 0.9 : 0.85} spacing={0}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: 'border.lightgray',
                    backgroundColor: 'background.secondary',
                  }}
                >
                </Box>
              </Grid>
            )
          })
        }
      </Grid>
  )
};

export default GamePane;
