import { useState, useEffect } from 'react';

export const Actions2 = () => {
  let [products, setProduct] = useState([]);
  let [productLength, setProductLength] = useState(null);
  useEffect(() => {
    fetch('http://localhost/php-react/all-product.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(data.products);
          setProductLength(true);
        } else {
          setProductLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertProduct = (newProduct) => {
    fetch('http://localhost/php-react/add-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct([
            {
              ...newProduct
            },
            ...products
          ]);
          setProductLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = (theID) => {
    // filter outing the product.
    let productDeleted = products.filter((product) => {
      return product.PId !== theID;
    });
    fetch('http://localhost/php-react/delete-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ PId: theID })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(productDeleted);
          if (products.length === 1) {
            setProductLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editMode2 = (id) => {
    products = products.map((product) => {
      if (product.PId === id) {
        product.isEditing = true;
        return product;
      }
      product.isEditing = false;
      return product;
    });
    setProduct(products);
  };

  // Cance the edit mode.
  const cancelEdit2 = (id) => {
    products = products.map((product) => {
      if (product.PId === id) {
        product.isEditing = false;
        return product;
      }
      return product;
    });
    setProduct(products);
  };

  const updateProduct = (productData) => {
    fetch('http://localhost/php-react/update-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          products = products.map((product) => {
            if (product.PId === productData.PId) {
              product.isEditing = false;
              product.PN = productData.PN;
              product.UP = productData.UP;
              product.Cost = productData.Cost;
              return product;
            }
            return product;
          });
          setProduct(products);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    products,
    productLength,
    insertProduct,
    deleteProduct,
    editMode2,
    cancelEdit2,
    updateProduct
  };
};
