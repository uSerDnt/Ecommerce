import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState, useContext, createContext} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/Colors';
import {color} from 'react-native-reanimated';
import {ShopContext} from '../context/ShopContext';
import {create} from 'react-test-renderer';

// const data = [
//   {
//     image:
//       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
//     name: 'Ao vang',
//     size: 'M',
//     price: '200. 000',
//     amount: 3,
//   },
//   {
//     image:
//       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
//     name: 'Ao vang',
//     size: 'M',
//     price: '200. 000',
//     amount: 3,
//   },
// ];

// redux

const Bill = ({navigation}) => {
  const [quality, setQuality] = React.useState(1);
  const {products, addProductToCart, cart} = useContext(ShopContext);
  // const [carts, setCarts] = useState([]);
  // const [product, setProduct] = useState(product);
  // const context = useContext(ShopContext);

  // useEffect(() => {
  //   if (typeof product === 'undefined') return;

  //   const newArr = carts.concat(product);

  //   setCarts(newArr);
  // }, [product]);

  // console.log('product', carts);

  const handleIncrement = () => {
    setQuality(e => e + 1);
  };
  const handleDecrement = () => {
    if (quality === 1) {
      return;
    }
    setQuality(e => e - 1);
  };
  return <></>;
};

export default Bill;

const styles = StyleSheet.create({});
