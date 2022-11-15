import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import ItemOrder from './ItemOrder';

const orders = [
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 1',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 2',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 4,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 3',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 2,
  },
  //   {
  //     image:
  //       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
  //     name: 'Ao vang 4',
  //     orderDate: '11/11/2022',
  //     status: 'Đang giao',
  //     price: '200. 000',
  //     amount: 1,
  //   },
  //   {
  //     image:
  //       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
  //     name: 'Ao vang 5',
  //     orderDate: '11/11/2022',
  //     status: 'Đang giao',
  //     price: '200. 000',
  //     amount: 1,
  //   },
];
const OrderY = () => {
  const [data, setData] = useState(orders);
  const handleRemoveItem = value => {
    const newData = data.filter((item, index) => index !== value);
    console.log('clikc handleRemoveItem', value, newData);
    setData(newData);
  };

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
        <Pressable onPress={() => console.log('click')}>
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
            My Orders
          </Text>
        </View>
      </View>

      {/* content */}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.orderDate}${index.toString()}`}
        renderItem={({item, index}) => {
          return (
            <ItemOrder
              item={item}
              index={index}
              onRemoveItem={position => handleRemoveItem(position)}
            />
          );
        }}
      />
    </View>
  );
};

export default OrderY;

const styles = StyleSheet.create({});
