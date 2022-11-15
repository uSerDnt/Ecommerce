import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const OrderY = () => {
  const [quality, setQuality] = React.useState(1);
  const handleIncrement = () => {
    setQuality(e => e + 1);
  };
  const handleDecrement = () => {
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
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          paddingVertical: 20,
          backgroundColor: 'white',
        }}>
        <View>
          <Image
            style={{height: 100, width: 100}}
            resizeMode="center"
            source={{
              uri: 'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
            }}
          />
        </View>
        <View>
          <Text>Ao vang</Text>
          <Text>Mã đơn hàng: 001</Text>
          <Text>Ngày đặt hàng: 11/11/2022</Text>
          <Text>Tình trạng: Đang giao</Text>
          <Text>Thành tiền: 200. 000đ</Text>
        </View>
        <View
          style={{
            height: 120,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
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
          {/* tanggiam */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Pressable onPress={handleDecrement}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <Feather name="minus" size={20} color="#2b2b2b" />
              </View>
            </Pressable>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                width: 30,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: Colors.dark,
                }}>
                {quality}
              </Text>
            </View>
            <Pressable onPress={handleIncrement}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <Ionicon name="add" size={25} color="#2b2b2b" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderY;

const styles = StyleSheet.create({});
