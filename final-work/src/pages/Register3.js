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

const Register3 = () => {
  const navigate = useNavigate();
  const { insertOrderdetail, detailId, products } = useContext(AppContext);
  const myfunction = (value) => {
    insertOrderdetail({
      OId: detailId.detailId,
      PId: value.PId,
      Qty: value.Qty,
      Counts: value.Counts
    });
  };
  const [Id, setId] = useState('');
  const myfunction2 = (e) => {
    const prodId = e.target.value;
    console.log(prodId);
    const newIds = products.map((product) => {
      return product.PId === prodId ? product.PN : null;
    });
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
              Qty: '',
              PId: '',
              Counts: ''
            }}
            validationSchema={Yup.object().shape({
              Qty: Yup.string().max(255).required('數量 is required'),
              PId: Yup.string().max(255).required('產品代號 is required'),
              Counts: Yup.string().max(255).required('折扣 is required')
            })}
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/orderdetail', { replace: true });
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
                    新增訂單明細
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.PId && errors.PId)}
                  fullWidth
                  helperText={touched.PId && errors.PId}
                  label="產品代碼"
                  margin="normal"
                  name="PId"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    myfunction2(e);
                  }}
                  value={values.PId}
                  variant="outlined"
                />
                {Id}
                <TextField
                  error={Boolean(touched.Qty && errors.Qty)}
                  fullWidth
                  helperText={touched.Qty && errors.Qty}
                  label="數量"
                  margin="normal"
                  name="Qty"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.Qty}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Counts && errors.Counts)}
                  fullWidth
                  helperText={touched.Counts && errors.Counts}
                  label="折扣"
                  margin="normal"
                  name="Counts"
                  onChange={handleChange}
                  type="text"
                  value={values.Counts}
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

export default Register3;
