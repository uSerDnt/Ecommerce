import React, {useState, useReducer} from 'react';
import ShopContext from './ShopContext';
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  GET_ALL_PRODUCT,
} from './reducer';

function GlobalState(props) {
  const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

  const addProductToCart = product => {
    dispatch({type: ADD_PRODUCT, product: product});
  };

  const removeProductFromCart = productId => {
    dispatch({type: REMOVE_PRODUCT, productId: productId});
  };

  const increment = (productId, quantity) => {
    dispatch({type: INCREMENT_QUANTITY, payload: {productId, quantity}});
  };
  const decrement = (productId, quantity) => {
    dispatch({type: DECREMENT_QUANTITY, payload: {productId, quantity}});
  };
  const getAllProduct = products => {
    dispatch({type: GET_ALL_PRODUCT, payload: products});
  };
  return (
    <ShopContext.Provider
      value={{
        products: cartState?.products,
        cart: cartState?.cart,
        getAllProduct: getAllProduct,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        incrementFromCart: increment,
        decrementFromCart: decrement,
      }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
