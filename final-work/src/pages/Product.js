import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductResults from 'src/components/products/ProductListResults';
import ProductToolbar from 'src/components/products/ProductListToolbar';
import { useContext } from 'react';
import { AppContext } from '../Context';

const Product = () => {
  const { newUser, products } = useContext(AppContext);
  console.log(products);
  return (
    <>
      <Helmet>
        <title>Product | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductToolbar />
          <Box sx={{ pt: 3 }}>
            <ProductResults products={products} newUser={newUser} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Product;
