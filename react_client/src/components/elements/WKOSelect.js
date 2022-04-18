import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'background.paper',
    border: '1px solid #ced4da',
    fontSize: 16,
    color: 'white !important',
    padding: '10px 26px 10px 12px',
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:focus': {
    },
    icon: {
      color: 'white',
    }
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing,
    width: '100%',
    height: '100%',
    borderRight: '1px solid rgb(102, 102, 102) !important',
  },
  customSelect: {
    backgroundColor: 'rgb(46, 46, 46) !important',
    height: '100% !important',
    '& .MuiInputBase-input': {
      textAlign: 'center',
      padding: '0 !important',
    },
    '& .MuiSelect-icon': {
      display: 'none',
    },
  },
  item: {
    color: 'white !important',
    '&:focus': {
      background: 'rgb(32, 32, 32) !important',
    }
  }
}));

export default function CustomizedSelects(props) {
  const classes = useStyles();
  const amountArray = (props.valueArray !== undefined) ? props.valueArray : [];

  const [amount, setAmount] = React.useState(amountArray.length === 0 ? '' : amountArray[0]);

  const handleChange = (event) => {
    setAmount(event.target.value);
    if (props.onAmountChanged !== undefined) props.onAmountChanged(event.target.value);
  };

  return (
    <FormControl className={classes.margin}>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        className={classes.customSelect}
        value={amount}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {
          amountArray.map((each, index) => {
            return (
            <MenuItem key={index} value={each} className={classes.item}>{each}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  );
}