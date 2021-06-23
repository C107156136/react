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
  const { setdateselect, dateselect } = useContext(AppContext);
  const myFunction = (e) => {
    const selects = e.target.value;
    console.log(selects.slice(0, 7));
    setdateselect(selects.slice(0, 7));
  };
  return (
    <Formik>
      {({ handleBlur, handleChange }) => (
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
                              onBlur={handleBlur}
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
