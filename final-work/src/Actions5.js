import { useState, useEffect } from 'react';

export const Actions5 = () => {
  let [customers, setCustomer] = useState([]);
  let [customerLength, setCustomerLength] = useState(null);
  useEffect(() => {
    fetch('http://localhost/php-react/all-customer.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setCustomer(data.customers);
          setCustomerLength(true);
        } else {
          setCustomerLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    customers,
    customerLength
  };
};
