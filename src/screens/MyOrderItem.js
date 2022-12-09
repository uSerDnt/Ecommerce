import React, {useContext, useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import ShopContext from '../context/ShopContext';

const MyOrderItem = props => {
  const {item} = props || {};
  const [quantity, setQuantity] = useState(item.quantity);
  useEffect(() => {
    console.log('useEffect');
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleIncrement = () => {
    setQuantity(e => e + 1);
    incrementFromCart(item.id, quantity);
  };
  const handleDecrement = () => {
    if (quantity === 1) {
      return removeProductFromCart(item.id);
    }
    setQuantity(e => e - 1);
    decrementFromCart(item.id, quantity);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 20,
        backgroundColor: 'white',
        marginBottom: 10,
      }}>
      <View>
        <Image
          style={{height: 100, width: 100}}
          resizeMode="center"
          source={{
            uri: item.images,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          // marginHorizontal: 16,
        }}>
        <Text>{item.name}</Text>
        <Text>Size: M</Text>
        <Text>Thành tiền: {item.price}đ</Text>
      </View>
      {/* tanggiam */}
      <View
        style={{
          width: 70,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}></View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: 10,
          }}>
          <Pressable onPress={handleDecrement}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Feather name="minus" size={18} color="#2b2b2b" />
            </View>
          </Pressable>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: Colors.dark,
              marginHorizontal: 4,
            }}>
            {quantity}
          </Text>
          <Pressable onPress={handleIncrement}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Ionicon name="add" size={18} color="#2b2b2b" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MyOrderItem;

const styles = StyleSheet.create({});
