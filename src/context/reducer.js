export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_A_PRODUCT = 'GET_A_PRODUCT';
const getAllProduct = (products, state) => {
  return {...state, products};
};
const getAProduct = (products, state) => {
  return {...state, products};
};
const addProductToCart = (product, state) => {
  // console.log('adding product', product);
  const updatedCart = [...state.cart];
  console.log('updatedCart', updatedCart);

  const updatedItemIndex = updatedCart.findIndex(
    item => item?._id === product?._id,
  );
  console.log('updatedItemIndex', updatedItemIndex);
  // updatedItem.quality++;
  if (updatedItemIndex < 0) {
    updatedCart.push({...product, quantity: 1});
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  console.log('log', {...state, cart: updatedCart});

  return {...state, cart: updatedCart};
};

const incrementFromCart = (payload, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === payload.productId,
  );
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity = payload.quantity + 1;
  updatedCart[updatedItemIndex] = updatedItem;
  return {...state, cart: updatedCart};
};
const decrementFromCart = (payload, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === payload.productId,
  );
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity = payload.quantity - 1;
  updatedCart[updatedItemIndex] = updatedItem;
  return {...state, cart: updatedCart};
};
const removeProductFromCart = (productId, state) => {
  console.log('remove product: ' + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {...state, cart: updatedCart};
};
const initialState = {
  products: [],
  cart: [],
};

export const shopReducer = (state = initialState, action) => {
  console.log('vstate', state);
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action?.product, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);

    case INCREMENT_QUANTITY:
      return incrementFromCart(action.payload, state);
    case DECREMENT_QUANTITY:
      return decrementFromCart(action.payload, state);
    case GET_ALL_PRODUCT:
      return getAllProduct(action.payload, state);
    case GET_A_PRODUCT:
      return getAProduct(action.payload, state);
    default:
      return state;
  }
};
