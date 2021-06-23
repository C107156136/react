import { Box, Button, Card, CardContent } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const OrderdetailToolbar = (props) => {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate('/register3');
  };
  return (
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
            <Box sx={{ maxWidth: 500 }}>
              <Button color="primary" variant="contained" onClick={myFunction}>
                新增
                <img src="/static/images/icon/plus.png" width="20px" />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default OrderdetailToolbar;
