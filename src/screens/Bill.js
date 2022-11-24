import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState, useContext, createContext} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/Colors';
import {color} from 'react-native-reanimated';
import {ShopContext} from '../context/ShopContext';
import {create} from 'react-test-renderer';

// const data = [
//   {
//     image:
//       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
//     name: 'Ao vang',
//     size: 'M',
//     price: '200. 000',
//     amount: 3,
//   },
//   {
//     image:
//       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
//     name: 'Ao vang',
//     size: 'M',
//     price: '200. 000',
//     amount: 3,
//   },
// ];

// redux

const Bill = ({navigation}) => {
  const [quality, setQuality] = React.useState(1);
  // const [carts, setCarts] = useState([]);
  const [product, setProduct] = useState(product);
  const context = createContext();
  // const context = useContext(ShopContext);

  useEffect(() => {
    if (typeof product === 'undefined') return;

    const newArr = carts.concat(product);

    setCarts(newArr);
  }, [product]);

  // console.log('product', carts);

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
            My Cart
          </Text>
        </View>
      </View>
      {/* content */}

      {context => (
        <React.Fragment>
          {context.cart.map(product => (
            <FlatList
              data={GlobalState.product}
              showsVerticalScrollIndicator={false}
              keyExtractor={(product, id) => `key-${index.toString()}`}
              renderItem={({product, id}) => {
                return (
                  <View
                    key={index}
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
                          uri: cartItem.images,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <Text>{cartItem.name}</Text>
                      <Text>Size: M</Text>
                      <Text>Thành tiền: {cartItem.price}đ</Text>
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
          ))}
        </React.Fragment>
      )}

      {/* Voucher */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingBottom: 10,
        }}>
        <TextInput
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            flex: 1,
            height: 40,
          }}
          placeholder="Promo code"></TextInput>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.primary,
              borderRadius: 10,
              height: 40,
              width: 80,
              marginLeft: 6,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Apply
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* tongthanhtoan */}
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
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 20,
            justifyContent: 'space-between',
          }}>
          <Text>Tong cong</Text>
          <Text>Tong tien</Text>
          <Text>Tong tien</Text>
          <Text>Tong tien</Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 50,
          }}>
          {/* buttonThanhtoan */}
          <TouchableOpacity onPress={() => navigation.navigate('Addpay')}>
            <View
              style={{
                height: 50,
                width: 100,
                justifyContent: 'center',
                backgroundColor: Colors.primary,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Check out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bill;

const styles = StyleSheet.create({});
