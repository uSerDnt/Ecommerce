import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native'; //rnfes
import React from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/Buttons';
const Voucher = () => {
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
        <Pressable onPress={() => console.log('click')}>
          <View
            style={{
              position: 'absolute',
              top: 30 / 2,
            }}>
            <Icon name="chevron-back" size={30} color="#000000" />
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
            My voucher
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
        <View
          style={{
            height: 100,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 50,
            justifyContent: 'center',
            paddingLeft: 6,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            Giảm giá 10%
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#B8BDC8',
            }}>
            Giảm 10k khi mua đơn 100k
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#B8BDC8',
            }}>
            Code:1X321773
          </Text>
        </View>
        {/* button */}
        <View
          style={{
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => console.log('handle')}
            style={{
              height: 50,
              width: '100%',
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
              Start Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({});
