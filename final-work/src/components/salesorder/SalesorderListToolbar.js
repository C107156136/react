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
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useContext } from 'react';
import { AppContext } from '../../Context';
const SalesorderToolbar = (props) => {
  const { setsalesorderselect, salesorderselect } = useContext(AppContext);
  const navigate = useNavigate();
  const myFunction = () => {
    navigate('/register2');
  };
  const myFunction2 = (e) => {
    const selects = e.target.value;
    console.log(selects);
    setsalesorderselect(selects);
  };
  return (
    <Formik>
      {({ handleBlur, handleChange, values }) => (
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
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={myFunction}
                          >
                            新增
                            <img
                              src="/static/images/icon/plus.png"
                              width="20px"
                            />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex-end' }}>
                            <TextField
                              fullWidth
                              label="查詢訂單編號"
                              margin="normal"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                handleChange(e);
                                myFunction2(e);
                              }}
                              type="text"
                              value={salesorderselect}
                              variant="outlined"
                            />
                          </Box>
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
export default SalesorderToolbar;
