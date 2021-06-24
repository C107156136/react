import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerList from 'src/components/customer/CustomerList';
import CustomerToolbar from 'src/components/customer/CustomerToolbar';
import { useContext } from 'react';
import { AppContext } from '../Context';

const Product = () => {
  const { newUser, orderdetails, customers, products } = useContext(AppContext);
  console.log(orderdetails);
  return (
    <>
      <Helmet>
        <title>orderdetail | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerList
              orderdetails={orderdetails}
              customers={customers}
              products={products}
              newUser={newUser}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Product;
