import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from '../Context';
import { useContext, useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const { insertProduct, products } = useContext(AppContext);
  const [value, setValue] = useState();
  console.log(products);
  const myfunction = (value) => {
    insertProduct({
      PId: value.Pid,
      PN: value.Pname,
      UP: value.Up,
      Cost: value.cost
    });
  };
  // const handleChange2 = (event) => {
  //   setValue((prevValues) => ({
  //     ...prevValues,
  //     value: event.target.value
  //   }));
  //   console.log(value);
  // };
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              Up: '',
              Pid: '',
              Pname: '',
              cost: ''
            }}
            validationSchema={Yup.object().shape({
              Up: Yup.string().max(255).required('UnitPrice is required'),
              Pid: Yup.string().max(255).required('產品ID is required'),
              Pname: Yup.string().max(255).required('產品名稱 is required'),
              cost: Yup.string().max(255).required('Cost is required')
            })}
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/product', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    新增產品
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.Pid && errors.Pid)}
                  fullWidth
                  helperText={touched.Pid && errors.Pid}
                  label="產品ID"
                  margin="normal"
                  name="Pid"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Pid}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Pname && errors.Pname)}
                  fullWidth
                  helperText={touched.Pname && errors.Pname}
                  label="產品名稱"
                  margin="normal"
                  name="Pname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Pname}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Up && errors.Up)}
                  fullWidth
                  helperText={touched.Up && errors.Up}
                  label="UnitPrice"
                  margin="normal"
                  name="Up"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.Up}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.cost && errors.cost)}
                  fullWidth
                  helperText={touched.cost && errors.cost}
                  label="Cost"
                  margin="normal"
                  name="cost"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.cost}
                  variant="outlined"
                />

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    新增
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
