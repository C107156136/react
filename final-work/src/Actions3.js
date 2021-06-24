import { useState, useEffect } from 'react';

export const Actions3 = () => {
  let [salesorders, setSalesorder] = useState([]);
  let [salesorderLength, setSalesorderLength] = useState(null);
  useEffect(() => {
    fetch('http://localhost/php-react/all-salesorder.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSalesorder(data.salesorders);
          setSalesorderLength(true);
        } else {
          setSalesorderLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertSalesorder = (newSalesorder) => {
    fetch('http://localhost/php-react/add-salesorder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSalesorder)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSalesorder([
            {
              ...newSalesorder
            },
            ...salesorders
          ]);
          setSalesorderLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSalesorder = (theID) => {
    // filter outing the product.
    let salesorderDeleted = salesorders.filter((salesorder) => {
      return salesorder.OId !== theID;
    });
    fetch('http://localhost/php-react/delete-salesorder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ OId: theID })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSalesorder(salesorderDeleted);
          if (salesorders.length === 1) {
            setSalesorderLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editMode3 = (id) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.OId === id) {
        salesorder.isEditing = true;
        return salesorder;
      }
      salesorder.isEditing = false;
      return salesorder;
    });
    setSalesorder(salesorders);
  };

  // Cance the edit mode.
  const cancelEdit3 = (id) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.OId === id) {
        salesorder.isEditing = false;
        return salesorder;
      }
      return salesorder;
    });
    setSalesorder(salesorders);
  };

  const updateSalesorder = (salesorderData) => {
    fetch('http://localhost/php-react/update-salesorder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(salesorderData)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          salesorders = salesorders.map((salesorder) => {
            if (salesorder.OId === salesorderData.OId) {
              salesorder.isEditing = false;
              salesorder.EId = salesorderData.EId;
              salesorder.CId = salesorderData.CId;
              salesorder.ODate = salesorderData.ODate;
              salesorder.Des = salesorderData.Des;
              return salesorder;
            }
            return salesorder;
          });
          setSalesorder(salesorders);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    salesorders,
    salesorderLength,
    insertSalesorder,
    deleteSalesorder,
    editMode3,
    cancelEdit3,
    updateSalesorder
  };
};
