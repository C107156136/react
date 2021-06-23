import { useState, useEffect } from 'react';

export const Actions4 = () => {
  let [orderdetails, setOrderdetail] = useState([]);
  let [orderdetailLength, setOrderdetailLength] = useState(null);
  useEffect(() => {
    fetch('http://localhost/php-react/all-orderdetail.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setOrderdetail(data.orderdetails);
          setOrderdetailLength(true);
        } else {
          setOrderdetailLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertOrderdetail = (newOrderdetail) => {
    fetch('http://localhost/php-react/add-orderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrderdetail)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setOrderdetail([
            {
              ...newOrderdetail
            },
            ...orderdetails
          ]);
          setOrderdetailLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOrderdetail = (theID) => {
    // filter outing the product.
    let OrderdetailDeleted = orderdetails.filter((orderdetail) => {
      return orderdetail.Seq !== theID;
    });
    fetch('http://localhost/php-react/delete-orderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Seq: theID })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setOrderdetail(OrderdetailDeleted);
          if (orderdetails.length === 1) {
            setOrderdetailLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editMode4 = (id) => {
    orderdetails = orderdetails.map((orderdetail) => {
      if (orderdetail.Seq === id) {
        orderdetail.isEditing = true;
        return orderdetail;
      }
      orderdetail.isEditing = false;
      return orderdetail;
    });
    setOrderdetail(orderdetails);
  };

  // Cance the edit mode.
  const cancelEdit4 = (id) => {
    orderdetails = orderdetails.map((orderdetail) => {
      if (orderdetail.OId === id) {
        orderdetail.isEditing = false;
        return orderdetail;
      }
      return orderdetail;
    });
    setOrderdetail(orderdetails);
  };

  const updateOrderdetail = (orderdetailData) => {
    fetch('http://localhost/php-react/update-orderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderdetailData)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          orderdetails = orderdetails.map((orderdetail) => {
            if (orderdetail.Seq === orderdetailData.Seq) {
              orderdetail.isEditing = false;
              orderdetail.OId = orderdetailData.OId;
              orderdetail.PId = orderdetailData.PId;
              orderdetail.Qty = orderdetailData.Qty;
              orderdetail.Counts = orderdetailData.Counts;
              return orderdetail;
            }
            return orderdetail;
          });
          setOrderdetail(orderdetails);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    orderdetails,
    orderdetailLength,
    insertOrderdetail,
    deleteOrderdetail,
    editMode4,
    cancelEdit4,
    updateOrderdetail
  };
};
