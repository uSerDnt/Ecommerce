import React, {createContext} from 'react';

export default React.createContext({
  products: [
    {
      id: 1,
      name: 'Áo thun vàng',
      images:
        'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Áo thun đen',
      images:
        'https://tse4.mm.bing.net/th?id=OIP.bJ48jmA9X9y9bIiN6VBARgHaII&pid=Api&P=0',
      price: 120,
      rating: 2.0,
    },
    {
      id: 3,
      name: 'Áo khoác',
      images:
        'https://tse2.mm.bing.net/th?id=OIP.W4c_pkm0jjlf8KvJt_BCXgHaHa&pid=Api&P=0',
      price: 120,
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Áo nam',
      images:
        'https://tse3.mm.bing.net/th?id=OIP.oxk-NL-1_JfJUXFenTSzVAHaHK&pid=Api&P=0',
      price: 120,
      rating: 4.0,
    },
  ],
  cart: [],

  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  incrementFromCart: (payload, quantity) => {},
});
