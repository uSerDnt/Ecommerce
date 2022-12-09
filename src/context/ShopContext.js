import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export default React.createContext({
  products: [],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  incrementFromCart: (payload, quantity) => {},
  decrementFromCart: (payload, quantity) => {},
});

const ShopContext = props => {
  const [products, setProducts] = useState([]);

  //Call fetch api with axios library
  useEffect(() => {
    axios
      .get('http://192.168.0.101:5000/api/product')
      .then(res => {
        let data = res.data;
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
        incrementFromCart,
        decrementFromCart,
      }}>
      {props.children}
    </Context.Provider>
  );
};
