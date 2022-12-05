import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShopContext from '../context/ShopContext';
import ProductItem from './ProductItem';

const Bill = () => {
  const navigation = useNavigation();
  const {products, addProductToCart, cart: cartProp} = useContext(ShopContext);
  const [cart, setCart] = useState(cartProp);
  let sumReduce = cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
  useEffect(() => {
    setCart(cartProp);
  }, [cartProp]);

  const saveMyOrderHistory = async () => {
    const getMyOrder = await AsyncStorage.getItem('@MyOrder');
    const parseMyOrder = JSON.parse(getMyOrder) || [];

    // const saveMyOrder = await AsyncStorage.setItem('@MyOrder', JSON.stringify())
  };
  useEffect(() => {
    const saveMyOrderHistory = async item => {
      const getMyOrder = await AsyncStorage.getItem('@MyOrder');
      const parseMyOrder = JSON.parse(getMyOrder) || [];
      console.log('parseMyOrder', parseMyOrder);
      parseMyOrder.push({item: 'test'});
      await AsyncStorage.setItem('@MyOrder', JSON.stringify(parseMyOrder));
    };
    saveMyOrderHistory();
    // const getCart = async () => {
    //   const carts = await AsyncStorage.getItem('@MyCart');
    //   const partCart = JSON.parse(carts);
    //   if(carts) {
    //     setCart(partCart);
    //     return;
    //   }
    // }
    // getCart();
  }, []);
  console.log('sumReduce', sumReduce);
  return (
    <View
      style={{
        flex: 1,
        color: Colors.gray,
        paddingHorizontal: 16,
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          height: 60,
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <View
            style={{
              position: 'absolute',
              top: 30 / 2,
            }}>
            <Ionicon name="chevron-back" size={30} color="#000000" />
          </View>
        </Pressable>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            My Cart
          </Text>
        </View>
      </View>
      {/* content */}
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `key-${index.toString()}`}
        renderItem={({item, index}) => {
          //  console.log('vitem', item);
          return <ProductItem item={item} />;
        }}
      />

      {/* Voucher */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingBottom: 10,
        }}>
        <TextInput
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            flex: 1,
            height: 40,
          }}
          placeholder="Promo code"></TextInput>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.primary,
              borderRadius: 10,
              height: 40,
              width: 80,
              marginLeft: 6,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Apply
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* tongthanhtoan */}
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            justifyContent: 'space-between',

            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Vận chuyển:
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            0
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            justifyContent: 'space-between',

            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Tổng cộng:
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            {sumReduce}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 50,
          }}>
          {/* buttonThanhtoan */}
          <TouchableOpacity onPress={() => navigation.navigate('Addpay')}>
            <View
              style={{
                height: 50,
                width: 100,
                justifyContent: 'center',
                backgroundColor: Colors.primary,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Check out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bill;
