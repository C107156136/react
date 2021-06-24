import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from '../../Context';
import { isEmpty } from 'lodash';
const CustomerList = ({ customers, newUser, ...rest }) => {
  const { arr } = useContext(AppContext);
  const a = arr.map((arr) => {
    return arr;
  });
  console.log(arr);
  console.log(a);
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>客戶ID</TableCell>
                <TableCell>客戶名稱</TableCell>
                <TableCell>總銷售金額</TableCell>
                <TableCell>總利潤</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(({ CId, CN, OrderDate, TotalEarn, Profit }) => {
                return arr.map((arr) => {
                  return isEmpty(arr) === true ? null : (OrderDate.search(
                      arr
                    ) !=
                      -1) ===
                    true ? (
                    <TableRow hover key={CId}>
                      <TableCell>{CId}</TableCell>
                      <TableCell>{CN}</TableCell>
                      <TableCell>{TotalEarn}</TableCell>
                      <TableCell>{Profit}</TableCell>
                    </TableRow>
                  ) : null;
                });
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default CustomerList;
