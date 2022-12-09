import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ListOrder from './ListOrder';

const orders = [
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 1',
    price: '200. 000',
    amount: 1,
    size: 'M',
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 2',
    price: '200. 000',
    amount: 4,
    size: 'M',
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang 3',
    price: '200. 000',
    amount: 2,
    size: 'M',
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
const OrderY = ({navigation}) => {
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
            Sản phẩm yêu thích
          </Text>
        </View>
      </View>

      {/* content */}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.name}${index.toString()}`}
        renderItem={({item, index}) => {
          return (
            <ListOrder
              item={item}
              index={index}
              onRemoveItem={position => handleRemoveItem(position)}
            />
          );
        }}
      />

      {/* button */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: Colors.primary,
          }}>
          <Text
            style={{
              color: Colors.dark,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Add card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderY;

const styles = StyleSheet.create({});
