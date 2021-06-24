import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  TableCell,
  Table,
  TableHead,
  TableRow
} from '@material-ui/core';
import { Formik } from 'formik';
import { useContext } from 'react';
import { AppContext } from '../../Context';
const CustomerToolbar = (props) => {
  const {
    setdateselect,
    dateselect,
    setdateselect2,
    dateselect2,
    setarr,
    arr
  } = useContext(AppContext);
  const myFunction = (e) => {
    const selects = e.target.value;
    console.log(selects.slice(0, 7));
    setdateselect(selects.slice(0, 7));
  };
  const myFunction2 = (e) => {
    const selects2 = e.target.value;
    console.log(selects2.slice(0, 7));
    setdateselect2(selects2.slice(0, 7));
  };
  const myFunction3 = () => {
    setarr(arr2);
  };
  let year1 = Number(dateselect.slice(0, 4));
  console.log(year1);
  let year2 = Number(dateselect2.slice(0, 4));
  console.log(year2);
  console.log(Number(dateselect2.slice(5, 7)));
  const arr2 = [];
  let tmp, i, j;
  for (i = year1; i <= year2; i++) {
    for (j = 1; j <= 12; j++) {
      if (i == year1) {
        if (j >= Number(dateselect.slice(5, 7))) {
          if (j < 10) tmp = String(year1) + '-0' + String(j);
          else tmp = String(year1) + '-' + String(j);
          arr2.push(tmp);
          if (j == Number(dateselect2.slice(5, 7))) break;
        }
      } else if (i != year1 && i != year2) {
        if (j < 10) {
          tmp = String(i) + '-0' + String(j);
        } else tmp = String(i) + '-' + String(j);
        arr2.push(tmp);
      } else if (i == year2) {
        if (j <= Number(dateselect2.slice(5, 7))) {
          if (j < 10) {
            tmp = String(year2) + '-0' + String(j);
            arr2.push(tmp);
          }
          if (j >= 10) {
            tmp = String(year2) + '-' + String(j);
            arr2.push(tmp);
          }
        }
      }
    }
  }
  const arr3 = arr2.filter((arr2) => arr2);
  console.log(arr2);

  return (
    <Formik>
      {({ handleChange }) => (
        <form>
          <Box {...props}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            ></Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Box sx={{ display: 'flex-end' }}>
                            <TextField
                              fullWidth
                              margin="normal"
                              onChange={(e) => {
                                handleChange(e);
                                myFunction(e);
                              }}
                              type="date"
                              variant="outlined"
                            />
                          </Box>
                          &nbsp;{dateselect}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex-end' }}>
                            <TextField
                              fullWidth
                              margin="normal"
                              onChange={(e) => {
                                handleChange(e);
                                myFunction2(e);
                              }}
                              type="date"
                              variant="outlined"
                            />
                          </Box>
                          &nbsp;{dateselect2}
                        </TableCell>
                        <TableCell style={{ width: '150px' }}>
                          <Button
                            color="primary"
                            variant="contained"
                            style={{ backgroundColor: 'rgb(14,171,95)' }}
                            onClick={myFunction3}
                          >
                            查詢
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default CustomerToolbar;
