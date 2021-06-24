import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesorderListResults from 'src/components/salesorder/SalesorderListResults';
import SalesorderListToolbar from 'src/components/salesorder/SalesorderListToolbar';
import { useContext } from 'react';
import { AppContext } from '../Context';

const Salesorder = () => {
  const { newUser, salesorders } = useContext(AppContext);
  console.log(salesorders);
  console.log('123');
  return (
    <>
      <Helmet>
        <title>Salesorder | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <SalesorderListToolbar />
          <Box sx={{ pt: 3 }}>
            <SalesorderListResults
              salesorders={salesorders}
              newUser={newUser}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Salesorder;
