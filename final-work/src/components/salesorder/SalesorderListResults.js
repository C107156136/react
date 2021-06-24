import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { isEmpty } from 'lodash';
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
import { useNavigate } from 'react-router-dom';

const SalesorderListResults = ({ salesorders, str, newUser, ...rest }) => {
  const navigate = useNavigate();
  const {
    deleteSalesorder,
    editMode3,
    updateSalesorder,
    cancelEdit3,
    salesorderselect,
    setdetailId
  } = useContext(AppContext);
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    var check = window.confirm('確定要修改這筆訂單嗎?');
    if (check === true) {
      updateSalesorder(newData);
    } else {
      return null;
    }
  };
  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value
    });
  };
  const enableEdit = (OId, EId, CId, ODate, Des) => {
    setNewData({ OId, EId, CId, ODate, Des });
    editMode3(OId);
  };
  const myFunction = (PI) => {
    var check = window.confirm('確定要刪除這筆訂單嗎?');
    if (check === true) {
      deleteSalesorder(PI);
    } else {
      return null;
    }
  };
  const myFunction2 = (OId) => {
    navigate('/app/orderdetail', {
      replace: true
    });
    setdetailId({
      detailId: OId
    });
  };
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>執行</TableCell>
                <TableCell>訂單編號</TableCell>
                <TableCell>員工代號</TableCell>
                <TableCell>客戶代號</TableCell>
                <TableCell>訂單日期</TableCell>
                <TableCell>備註</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesorders.map(({ OId, EId, CId, ODate, Des, isEditing }) => {
                return isEmpty(salesorderselect) === true ? (
                  isEditing === true ? (
                    <TableRow hover key={OId}>
                      <TableCell>
                        <Button color="primary" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button onClick={() => cancelEdit3(OId)}>Cancel</Button>
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
                          defaultValue={EId}
                          onChange={(e) => updateNewData(e, 'EId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={CId}
                          onChange={(e) => updateNewData(e, 'CId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={ODate}
                          onChange={(e) => updateNewData(e, 'ODate')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Des}
                          onChange={(e) => updateNewData(e, 'Des')}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow hover key={OId}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Button onClick={() => myFunction(OId)}>
                            <img
                              src="/static/images/icon/delete.png"
                              width="20px"
                            />
                          </Button>
                          <Button
                            onClick={() =>
                              enableEdit(OId, EId, CId, ODate, Des)
                            }
                          >
                            <img
                              src="/static/images/icon/edit.png"
                              width="20px"
                            />
                          </Button>
                          <Button onClick={() => myFunction2(OId)}>
                            <img
                              src="/static/images/icon/detail.png"
                              width="20px"
                            />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{OId}</TableCell>
                      <TableCell>{EId}</TableCell>
                      <TableCell>{CId}</TableCell>
                      <TableCell>{ODate}</TableCell>
                      <TableCell>{Des}</TableCell>
                    </TableRow>
                  )
                ) : (OId.search(salesorderselect) != -1) === true ? (
                  isEditing === true ? (
                    <TableRow hover key={OId}>
                      <TableCell>
                        <Button color="primary" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button onClick={() => cancelEdit3(OId)}>Cancel</Button>
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
                          defaultValue={EId}
                          onChange={(e) => updateNewData(e, 'EId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={CId}
                          onChange={(e) => updateNewData(e, 'CId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={ODate}
                          onChange={(e) => updateNewData(e, 'ODate')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Des}
                          onChange={(e) => updateNewData(e, 'Des')}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow hover key={OId}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Button onClick={() => myFunction(OId)}>
                            <img
                              src="/static/images/icon/delete.png"
                              width="20px"
                            />
                          </Button>
                          <Button
                            onClick={() =>
                              enableEdit(OId, EId, CId, ODate, Des)
                            }
                          >
                            <img
                              src="/static/images/icon/edit.png"
                              width="20px"
                            />
                          </Button>
                          <Button onClick={() => myFunction2(OId)}>
                            <img
                              src="/static/images/icon/detail.png"
                              width="20px"
                            />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{OId}</TableCell>
                      <TableCell>{EId}</TableCell>
                      <TableCell>{CId}</TableCell>
                      <TableCell>{ODate}</TableCell>
                      <TableCell>{Des}</TableCell>
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

export default SalesorderListResults;
