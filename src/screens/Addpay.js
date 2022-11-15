import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    name: 'Momo',
    image:
      'https://hoabinhairlines.vn/public/frontend/css/images/momo_icon_rectangle.png',
  },
  {
    name: 'Paypal',
    image:
      'https://hoabinhairlines.vn/public/frontend/css/images/momo_icon_rectangle.png',
  },
];
const Addpay = ({navigation}) => {
  const [selected, setSelected] = useState(undefined);
  // const getDay = new Date().getDay;
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
            Add payment
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
        {data.map((item, index) => {
          return (
            <Pressable onPress={() => setSelected(index)}>
              <View
                style={[
                  {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginTop: 40,
                    marginHorizontal: 40,
                    height: 50,
                    justifyContent: 'center',
                    // borderColor: selected === index ? 'green' : 'black',
                  },
                  selected === index
                    ? {
                        backgroundColor: 'green',
                        borderColor: 'yellow',
                        borderWidth: 2,
                      }
                    : null,
                ]}>
                <Text>{item.name}</Text>
                <Image
                  style={{height: 45, width: 200}}
                  resizeMode="center"
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
            </Pressable>
          );
        })}
        {/* paypal */}
        {/* <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 40,
            marginHorizontal: 40,
            height: 50,
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 45, width: 200}}
            resizeMode="center"
            source={{
              uri: 'https://kieutruong.com/wp-content/uploads/2019/11/huong-dan-dang-ky-tai-khoan-paypal-1024x512.jpg',
            }}
          />
        </View> */}
        {/* momo */}
        {/* <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 30,
            marginHorizontal: 40,
            height: 50,
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 40, width: 200}}
            resizeMode="center"
            source={{
              uri: 'https://hoabinhairlines.vn/public/frontend/css/images/momo_icon_rectangle.png',
            }}
          />
        </View> */}
        {/* zalopay */}
        {/* <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 30,
            marginHorizontal: 40,
            height: 50,
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 40, width: 200}}
            resizeMode="center"
            source={{
              uri: 'http://idgv.vn/Event/RetailBanking/wp-content/uploads/2022/03/ZaloPay_color_hoz.png',
            }}
          />
        </View> */}
        {/* button */}
        <View
          style={{
            paddingTop: 50,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Orderinfo', {
                payment: typeof selected !== 'undefined' ? data[selected] : {},
              })
            }
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
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Addpay;

const styles = StyleSheet.create({});
