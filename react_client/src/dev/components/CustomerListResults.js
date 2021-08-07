import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import { Send, Check } from 'react-feather';
import axios from 'axios';
import { BASE_API_URL } from 'src/config';
import store from 'src/store';
import { ROLE_A, ROLE_B, ROLE_C, ROLE_E, ROLE_F, ROLE_G } from 'src/config';

export const UPDATE_USER_ROLE = "UPDATE_USER_ROLE";

const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const states = [
    {
      value: ROLE_A,
      label: 'Role A'
    },
    {
      value: ROLE_B,
      label: 'Role B'
    },
    {
      value: ROLE_C,
      label: 'Role C'
    },
    {
      value: ROLE_E,
      label: 'Role E'
    },
    {
      value: ROLE_F,
      label: 'Role F'
    },
  ];

  const handleChange = (id) => (e) => {
    let role = e.target.value;
    axios.post(`${BASE_API_URL}api/member/update-admin/${id}`, {
      role: role,
    })
    .then(({data}) => {
      let {code, content, errors} = data;
      if (code === 200) {
        store.dispatch({
          type: UPDATE_USER_ROLE,
          payload: {
            id: id,
            role: role,
          }
        });
      } else {
        alert("You are not allowed");
      }
    }).catch(err => {
      alert("Error interrupted. Please contact developer. (^^)//");
    })
  }

  console.log(customers)

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  /> */}
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  Nickname
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  AmazonEmail
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Joined date
                </TableCell>
                {/* <TableCell>
                  Actions
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice((page) * limit, (page+1) * limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    /> */}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                        color="textPrimary"
                        variant="body1"
                    >
                    {customer.nickname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.amazon_email}
                  </TableCell>
                  <TableCell>
                    <TextField
                        fullWidth
                        label="Select Role"
                        name="role"
                        onChange={(e) => {
                          if (customer.role != ROLE_A) {
                            handleChange(customer.id)(e)
                          }
                        }}
                        required
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                        value={customer.role}
                    >
                        {states.map((option) => customer.role != ROLE_A && option.value == ROLE_A ? "" : (
                            <option
                                key={option.value}
                                value={option.value}
                                checked={true}
                            >
                                {option.label}
                            </option>
                          )
                        )}
                    </TextField>
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  {/* <TableCell>
                    <Button
                        color="primary"
                        fullWidth
                        size="large"
                        variant="contained"
                    >
                        <Send />
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[1, 2, 5]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
