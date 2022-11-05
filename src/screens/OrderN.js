import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderN = () => {
  return (
    <View
      style={{
        flex: 1,
        color: Colors.gray,
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
            My Orders
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
            marginTop: 100,
            marginHorizontal: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 200, width: 200}}
            resizeMode="center"
            source={{
              uri: 'http://www.clker.com/cliparts/Q/9/j/7/V/O/yellow-cart-hi.png',
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            You have no order
          </Text>
        </View>
        {/* button */}
        <View
          style={{
            paddingTop: 50,
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

export default OrderN;

const styles = StyleSheet.create({});
