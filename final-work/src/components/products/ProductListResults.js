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
import { isEmpty } from 'lodash';
const ProductListResults = ({ products, newUser, ...rest }) => {
  const {
    deleteProduct,
    editMode2,
    updateProduct,
    cancelEdit2,
    productselect
  } = useContext(AppContext);
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    var check = window.confirm('確定要修改這筆產品嗎?');
    if (check === true) {
      updateProduct(newData);
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
  const enableEdit = (PId, PN, UP, Cost) => {
    setNewData({ PId, PN, UP, Cost });
    editMode2(PId);
  };
  const myFunction = (PI) => {
    var check = window.confirm('確定要刪除這筆產品嗎?');
    if (check === true) {
      deleteProduct(PI);
    } else {
      return null;
    }
  };
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>執行</TableCell>
                <TableCell>品號</TableCell>
                <TableCell>品名</TableCell>
                <TableCell>定價</TableCell>
                <TableCell>成本</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(({ PId, PN, UP, Cost, isEditing }) => {
                return isEmpty(productselect) === true ? (
                  isEditing === true ? (
                    <TableRow hover key={PId}>
                      <TableCell>
                        <Button color="primary" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button onClick={() => cancelEdit2(PId)}>Cancel</Button>
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={PId}
                          readOnly
                          onChange={(e) => updateNewData(e, 'PId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={PN}
                          onChange={(e) => updateNewData(e, 'PN')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={UP}
                          onChange={(e) => updateNewData(e, 'UP')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Cost}
                          onChange={(e) => updateNewData(e, 'Cost')}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow hover key={PId}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Button onClick={() => myFunction(PId)}>
                            <img
                              src="/static/images/icon/delete.png"
                              width="20px"
                            />
                          </Button>
                          <Button onClick={() => enableEdit(PId, PN, UP, Cost)}>
                            <img
                              src="/static/images/icon/edit2.png"
                              width="20px"
                            />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{PId}</TableCell>
                      <TableCell>{PN}</TableCell>
                      <TableCell>{UP}</TableCell>
                      <TableCell>{Cost}</TableCell>
                    </TableRow>
                  )
                ) : (PId.search(productselect) != -1) === true ? (
                  isEditing === true ? (
                    <TableRow hover key={PId}>
                      <TableCell>
                        <Button color="primary" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button onClick={() => cancelEdit2(PId)}>Cancel</Button>
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={PId}
                          readOnly
                          onChange={(e) => updateNewData(e, 'PId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={PN}
                          onChange={(e) => updateNewData(e, 'PN')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={UP}
                          onChange={(e) => updateNewData(e, 'UP')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Cost}
                          onChange={(e) => updateNewData(e, 'Cost')}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow hover key={PId}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Button onClick={() => myFunction(PId)}>
                            <img
                              src="/static/images/icon/delete.png"
                              width="20px"
                            />
                          </Button>
                          <Button onClick={() => enableEdit(PId, PN, UP, Cost)}>
                            <img
                              src="/static/images/icon/edit2.png"
                              width="20px"
                            />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>{PId}</TableCell>
                      <TableCell>{PN}</TableCell>
                      <TableCell>{UP}</TableCell>
                      <TableCell>{Cost}</TableCell>
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

ProductListResults.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductListResults;
