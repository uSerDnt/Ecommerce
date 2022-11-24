import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/Buttons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const Orderinfo = ({navigation, route}) => {
  const {payment} = route.params;
  console.log('payment', payment);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.gray,
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'center',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <View
            style={{
              position: 'absolute',
              top: 30 / 2,
            }}>
            <Ionicons name="chevron-back" size={30} color="#000000" />
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
            My order
          </Text>
        </View>
      </View>
      {/* content */}
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
          flex: 1,
          elevation: 9,
          paddingHorizontal: 16,
        }}>
        {/* view1 */}
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 50,
            // justifyContent: 'space-around',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <MaterialCommunityIcon
              name="clipboard-text-outline"
              size={30}
              color="#000000"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Mã đơn hàng
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Ngày đặt hàng: 11/11/2022
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Tình trạng: Đang giao
            </Text>
          </View>
        </View>
        {/* view2 */}
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            // justifyContent: 'space-around',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <EvilIcon name="location" size={30} color="#000000" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Địa chỉ người nhận
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Đoàn Ngọc Trọng
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#B8BDC8',
              }}>
              0335764560
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#B8BDC8',
              }}>
              744 Cao Lỗ, Phường 4, Quận 8, TP. Hồ Chí Minh
            </Text>
          </View>
        </View>
        {/* view3 */}
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              absolute: 'position',
            }}>
            <MaterialCommunityIcon
              name="credit-card-outline"
              size={30}
              color="#000000"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: Colors.dark,
              }}>
              Phương thức thanh toán: {payment.name}
            </Text>
          </View>
        </View>
        {/* button */}
        <View
          style={{
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            //backgroundColor: 'red',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              height: 50,
              width: '50%',
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
              Mua lại
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Orderinfo;

const styles = StyleSheet.create({});
