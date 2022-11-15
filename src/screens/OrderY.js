import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
  {
    image:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    name: 'Ao vang',
    orderDate: '11/11/2022',
    status: 'Đang giao',
    price: '200. 000',
    amount: 1,
  },
];
const OrderY = () => {
  const [quality, setQuality] = React.useState(1);
  const handleIncrement = () => {
    setQuality(e => e + 1);
  };
  const handleDecrement = () => {
    if (quality === 1) {
      return;
    }
    setQuality(e => e - 1);
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
        renderItem={(item, position) => {
          return (
            <View
              key={position}
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
                <Text>{item.name}</Text>
                <Text>Mã đơn hàng: 001</Text>
                <Text>Ngày đặt hàng: {item.orderDate}</Text>
                <Text>Tình trạng: {item.status}</Text>
                <Text>Thành tiền: {item.price}đ </Text>
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
                      <MaterialIcon
                        name="navigate-next"
                        size={30}
                        color="#2b2b2b"
                      />
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
                    {quality}
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
        }}
      />

      {/* <ScrollView>
        {data.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                paddingVertical: 10,
                backgroundColor: 'white',
              }}>
              <Image
                style={{height: 100, width: 100}}
                resizeMode="center"
                source={{
                  uri: 'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
                }}
              />
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
                <Text>Mã đơn hàng: 001</Text>
                <Text>Ngày đặt hàng: {item.orderDate}</Text>
                <Text>Tình trạng: {item.status}</Text>
                <Text>Thành tiền: {item.price}đ </Text>
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
                      <MaterialIcon
                        name="navigate-next"
                        size={30}
                        color="#2b2b2b"
                      />
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
                    {quality}
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
        })}
      </ScrollView> */}
    </View>
  );
};

export default OrderY;

const styles = StyleSheet.create({});
