import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import OrderdetailResults from 'src/components/orderdetail/OrderdetailList';
import OrderdetailToolbar from 'src/components/orderdetail/OrderdetailToolbar';
import { useContext } from 'react';
import { AppContext } from '../Context';

const Product = () => {
  const { newUser, orderdetails } = useContext(AppContext);
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
          <OrderdetailToolbar />
          <Box sx={{ pt: 3 }}>
            <OrderdetailResults orderdetails={orderdetails} newUser={newUser} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Product;
