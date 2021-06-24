import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  TableCell,
  Table,
  TableHead,
  TableRow
} from '@material-ui/core';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context';
const ProductListToolbar = (props) => {
  const navigate = useNavigate();
  const { setproductselect, productselect } = useContext(AppContext);
  const myFunction = () => {
    navigate('/register');
  };
  const myFunction2 = (e) => {
    const selects = e.target.value;
    console.log(selects);
    setproductselect(selects);
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
                          <Button
                            color="secondary"
                            variant="contained"
                            onClick={myFunction}
                          >
                            新增
                            <img
                              src="/static/images/icon/plus2.png"
                              width="20px"
                            />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex-end' }}>
                            <TextField
                              fullWidth
                              label="查詢產品編號"
                              margin="normal"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                handleChange(e);
                                myFunction2(e);
                              }}
                              type="text"
                              value={productselect}
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

export default ProductListToolbar;
