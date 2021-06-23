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

const Register2 = () => {
  const navigate = useNavigate();
  const { insertSalesorder, products, customers2 } = useContext(AppContext);
  const myfunction = (value) => {
    insertSalesorder({
      OId: value.OId,
      EId: value.EId,
      CId: value.CId,
      ODate: value.ODate,
      Des: value.Des
    });
  };
  const [Id, setId] = useState('');
  const myfunction2 = (e) => {
    const custId = e.target.value;
    console.log(custId);
    console.log(customers2);
    const newIds = customers2.map((customer) => {
      return customer.CId === custId ? customer.CName : null;
    });
    console.log(newIds);
    const newId = newIds.filter((newId) => {
      return newId != null;
    });
    setId(newId);
  };
  console.log(Id);
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
              CId: '',
              OId: '',
              EId: '',
              ODate: '',
              CN: '',
              Des: '無'
            }}
            validationSchema={Yup.object().shape({
              CId: Yup.string().max(255).required('客戶代號 is required'),
              OId: Yup.string().max(255).required('訂單編號 is required'),
              EId: Yup.string().max(255).required('員工代號 is required'),
              ODate: Yup.string().max(255).required('訂單日期 is required')
            })}
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/salesorder', { replace: true });
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
                    新增訂單
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.OId && errors.OId)}
                  fullWidth
                  helperText={touched.OId && errors.OId}
                  label="訂單編號"
                  margin="normal"
                  name="OId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.OId}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.EId && errors.EId)}
                  fullWidth
                  helperText={touched.EId && errors.EId}
                  label="員工代碼"
                  margin="normal"
                  name="EId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.EId}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.CId && errors.CId)}
                  fullWidth
                  helperText={touched.CId && errors.CId}
                  label="客戶代碼"
                  margin="normal"
                  name="CId"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    myfunction2(e);
                  }}
                  type="text"
                  value={values.CId}
                  variant="outlined"
                />
                {Id}
                <TextField
                  error={Boolean(touched.ODate && errors.ODate)}
                  fullWidth
                  helperText={touched.ODate && errors.ODate}
                  margin="normal"
                  name="ODate"
                  onChange={handleChange}
                  type="date"
                  value={values.ODate}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Des && errors.Des)}
                  fullWidth
                  helperText={touched.Des && errors.Des}
                  label="備註"
                  margin="normal"
                  name="Des"
                  onChange={handleChange}
                  type="text"
                  value={values.Des}
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

export default Register2;
