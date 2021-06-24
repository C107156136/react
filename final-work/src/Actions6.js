import { useState, useEffect } from 'react';

export const Actions6 = () => {
  let [customers2, setCustomers2] = useState([]);
  let [customers2Length, setCustomers2Length] = useState(null);
  useEffect(() => {
    fetch('http://localhost/php-react/all-customer2.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setCustomers2(data.customers2);
          setCustomers2Length(true);
        } else {
          setCustomers2Length(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    customers2,
    customers2Length
  };
};
