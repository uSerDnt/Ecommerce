import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ShopContext from '../context/ShopContext';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MyOrderItem from './MyOrderItem';
const MyOrder = () => {
  const navigation = useNavigation();
  const {products, addProductToCart, cart: cartProp} = useContext(ShopContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(cartProp);
  }, [cartProp]);
  useEffect(() => {
    const getCart = async () => {
      const carts = await AsyncStorage.getItem('@cartItems');
      const partCart = JSON.parse(carts);
      if (carts) {
        setCart(partCart);
        console.log('saveorder', partCart);
        return;
      }
    };
    getCart();
  }, []);
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
            My Order
          </Text>
        </View>
      </View>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(cart, index) => `key-${index.toString()}`}
        renderItem={({item, index}) => {
          return <MyOrderItem item={item} />;
        }}
      />
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({});
