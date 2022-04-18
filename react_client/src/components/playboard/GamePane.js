import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CCButton from 'src/components/elements/CCButton';
import { CCList } from 'src/constants/GlobalConstants';

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
    padding: '0px !important',
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
  },
  stateCell: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'flex-end',
    padding: '3px !important',
    backgroundColor: 'rgb(32,32,32)',
  },
}));

const GamePane = (props) => {
  const [ccList, setCcList] = useState(CCList);
  const [ccData, setCcData] = useState(null);

  const classes = useStyles();

  const indexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  useEffect(() => {
    if (ccData !== null) return;
    console.log('initialized');
    let data = {}
    CCList.forEach(each => {
      data[each] = {
        status: 'default',
        back: 'black',
        ticket: 0,
      }
    });
    setCcData(data);
  }, [])

  const handleSelected = (text, status) => {
    if(props.onSelected !== undefined) {
      if (ccData == null) return;
      let data = {};
      Object.assign(data, ccData);

      if (status === 'default') {
        data[text].status = 'flash';
        data[text].back = 'background.lightblue';
      }
      if (status === 'flash') {
        data[text].status = 'default';
        data[text].back = 'background.black';
      }
      setCcData(data)
    }
  }

  const cellItemList = indexList.map((super_each, super_index) => {
    if(super_index > 9) return;
    return (
      <>
        <Grid key={super_index} item className={ classes.cell } xs={0.85}>
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
        <Grid item className={ classes.cell } xs={0.9} >
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
            if ( (index * 1.0 / 10) < super_index || (index * 1.0 / 10) >= (super_index + 1) ) return <></>
            return (
              <Grid key={index} item className={ classes.stateCell } xs={0.85}>
                <CCButton
                  className={classes.button}
                  style={{
                    padding: '0',
                    maxWidth: '100% !important',
                    height: '100% !important',
                  }}
                  containerStyle={{
                    border: '1px solid white',
                    width: '100%',
                    height: '100%',
                    borderColor: 'border.lightgray',
                  }}
                  color={'text.white'}
                  backgroundColor={ccData === null ? 'background.black' : ccData[each]['back']}
                  text={each}
                  flashTime='1s'
                  theme="dark"
                  status={ccData === null ? 'default' : ccData[each]['status']}
                  onClick={handleSelected}
                />
              </Grid>
            )
          })
        }
        <Grid item className={ classes.cell } xs={0.9} >
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
        <Grid item className={ classes.cell } xs={0.85}>
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
              <Grid key={index} item className={ classes.cell } xs={ (index === 1 || index === 12) ? 0.9 : 0.85}>
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
              <Grid key={index} item className={ classes.cell } xs={ (index === 1 || index === 12) ? 0.9 : 0.85}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: (index === 0 || index === 13) ? 'border.lightgray' : 'border.default',
                    backgroundColor: (index === 0 || index === 13) ? 'background.secondary' : 'background.default',
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
              <Grid key={index} item className={ classes.cell } xs={ (index === 1 || index === 12) ? 0.9 : 0.85}>
                <Box
                  className={ classes.block }
                  sx={{
                    padding: '0 !important',
                    border: '1px solid white',
                    borderColor: (index === 0 || index === 13) ? 'border.lightgray' : 'border.default',
                    backgroundColor: (index === 0 || index === 13) ? 'background.secondary' : 'background.default',
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
              <Grid key={index} item className={ classes.cell } xs={ (index === 1 || index === 12) ? 0.9 : 0.85}>
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
