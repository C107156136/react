import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from '../../Context';

const OrderdetailList = ({ orderdetails, newUser, ...rest }) => {
  const {
    deleteOrderdetail,
    editMode4,
    updateOrderdetail,
    cancelEdit4,
    detailId
  } = useContext(AppContext);
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    updateOrderdetail(newData);
  };
  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value
    });
  };
  const enableEdit = (Seq, OId, PId, Qty, Counts) => {
    setNewData({ Seq, OId, PId, Qty, Counts });
    editMode4(Seq);
  };
  const myFunction = (PI) => {
    deleteOrderdetail(PI);
  };
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>執行</TableCell>
                <TableCell>Seq</TableCell>
                <TableCell>訂單編號</TableCell>
                <TableCell>產品代號</TableCell>
                <TableCell>數量</TableCell>
                <TableCell>折扣</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderdetails.map(({ Seq, OId, PId, Qty, Counts, isEditing }) => {
                return detailId.detailId === OId ? (
                  isEditing === true ? (
                    <TableRow hover key={Seq}>
                      <TableCell>
                        <Button color="primary" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button onClick={() => cancelEdit4(OId)}>Cancel</Button>
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Seq}
                          readOnly
                          onChange={(e) => updateNewData(e, 'Seq')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={OId}
                          readOnly
                          onChange={(e) => updateNewData(e, 'OId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={PId}
                          onChange={(e) => updateNewData(e, 'PId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Qty}
                          onChange={(e) => updateNewData(e, 'Qty')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Counts}
                          onChange={(e) => updateNewData(e, 'Counts')}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow hover key={Seq}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Button onClick={() => myFunction(Seq)}>
                            <img
                              src="/static/images/icon/delete.png"
                              width="20px"
                            />
                          </Button>
                          <Button
                            onClick={() =>
                              enableEdit(Seq, OId, PId, Qty, Counts)
                            }
                          >
                            <img
                              src="/static/images/icon/modify.jpg"
                              width="20px"
                            />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{Seq}</TableCell>
                      <TableCell>{OId}</TableCell>
                      <TableCell>{PId}</TableCell>
                      <TableCell>{Qty}</TableCell>
                      <TableCell>{Counts}</TableCell>
                    </TableRow>
                  )
                ) : null;
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

OrderdetailList.propTypes = {
  orderdetails: PropTypes.array.isRequired
};

export default OrderdetailList;
