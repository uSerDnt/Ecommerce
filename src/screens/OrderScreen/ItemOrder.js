import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {ScrollView} from 'react-native-gesture-handler';

// callbackfunction
const ItemOrder = props => {
  const {onRemoveItem, item, index} = props;
  const {status, price, amount: amountProp, image, name, orderDate} = item;

  const [amount, setAmount] = React.useState(amountProp);
  const handleIncrement = () => {
    setAmount(e => e + 1);
  };
  const handleDecrement = () => {
    if (amount === 1) {
      onRemoveItem?.(index);
      return;
    }
    setAmount(e => e - 1);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        marginBottom: 10,
      }}>
      <Image
        style={{height: 100, width: 100}}
        resizeMode="center"
        source={{
          uri: 'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
        }}
      />
      <View style={{flex: 1}}>
        <Text>{name}</Text>
        <Text>Mã đơn hàng: 001</Text>
        <Text>Ngày đặt hàng: {orderDate}</Text>
        <Text>Tình trạng: {status}</Text>
        <Text>Thành tiền: {price}đ </Text>
      </View>

      <View
        style={{
          width: 70,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}>
          <Pressable onPress={() => console.log('click')}>
            <View
              style={{
                height: 70,
                width: 30,
                borderRadius: 10,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcon name="navigate-next" size={30} color="#2b2b2b" />
            </View>
          </Pressable>
        </View>
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
            {amount}
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

export default ItemOrder;

const styles = StyleSheet.create({});
