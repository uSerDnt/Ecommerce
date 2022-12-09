import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import Buttons from '../components/Buttons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Product from './Product';
import {useNavigation, useRoute} from '@react-navigation/native';
import ShopContext from '../context/ShopContext';
import GlobalState from '../context/GlobalState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Home = ({navigation, props}) => {
  const {
    products,
    addProductToCart,
    cart: cartProp,
    getAllProduct,
  } = useContext(ShopContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(cartProp);
  }, [cartProp]);
  const addtocart = async id => {
    let itemArray = await AsyncStorage.getItem('@cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('@cartItems', JSON.stringify(array));
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('@cartItems', JSON.stringify(array));
      } catch (error) {
        return error;
      }
    }
  };
  const [shouldShow, setshouldShow] = useState(false);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          marginRight: 16,
          minWidth: Dimensions.get('window').width / 2 - 24,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Product', {productId: item?._id})
          }>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 120,
                width: '90%',
                marginVertical: 10,
                resizeMode: 'contain',
              }}
              source={{
                uri: item?.images[0],
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 12,
          }}>
          <Text
            style={{
              color: Colors.dark,
            }}>
            {item?.title}
          </Text>
          {/* rating */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="star" size={16} color={Colors.primary} />
            <Text style={{fontWeight: 'bold', color: Colors.dark}}>
              {item?.ratings?.[0]?.star}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.price}>{item?.price} đ</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                // console.log(item);
                addProductToCart(item);
                // addtocart(item);
              }}
              style={{
                height: 30,
                backgroundColor: Colors.primary,
                // flex: 1,
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 8,
              }}>
              <FontAwesome name="heart-o" size={16} />
              <Text
                style={{
                  color: Colors.dark,
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginLeft: 8,
                }}>
                Add Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const route = useRoute();
  const {accessToken} = route.params || {};
  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data} = await axios.get(
          'http://192.168.22.100:5000/api/product',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        getAllProduct(data);
      } catch (error) {}
    };
    getProducts();
  }, []);
  // console.log('products', products);
  return (
    <FlatList
      ListHeaderComponent={
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.gray,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Discover
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: 6,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  height: 40,
                  width: 300,
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Text style={{fontSize: 15}}>Find product</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshouldShow(!shouldShow)}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.primary,
                  borderRadius: 10,
                  height: 40,
                  width: 40,
                  marginLeft: 6,
                }}>
                <Ionicon name="filter" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              height: 150,
              width: '100%',
              borderRadius: 10,
            }}
            source={{
              uri: 'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Xu hướng mới
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: Colors.primary,
              }}>
              Xem tất cả
            </Text>
          </View>
          {shouldShow ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 30,
              }}>
              <View
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.dark,
                      fontWeight: '400',
                      fontSize: 20,
                      paddingHorizontal: 6,
                    }}>
                    Áo
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.dark,
                      fontWeight: '400',
                      fontSize: 20,
                      paddingHorizontal: 6,
                    }}>
                    Quần
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.dark,
                      fontWeight: '400',
                      fontSize: 20,
                    }}>
                    Phụ kiện
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      }
      columnWrapperStyle={{marginTop: 20}}
      data={products}
      contentContainerStyle={{
        marginLeft: 16,
      }}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => `key-${index.toString()}`}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  price: {
    flex: 1,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});
