import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ItemOrder from './ListScreen/ListOrder';
import ShopContext from '../context/ShopContext';
import axios from 'axios';
const Product = ({Home, route}) => {
  const navigation = useNavigation();
  // const findProduct = products.find(e => e?.id === productId);
  // const {name, price, images} = findProduct || {};
  // const findProduct = products?.find(product => product.id === productId);
  // const {title, price, images} = findProduct || {};
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState(undefined);
  const {
    products,
    addProductToCart,
    cart: cartProp,
    getAProduct,
  } = useContext(ShopContext);
  const {productId} = route.params;
  useEffect(() => {
    const getAProduct = async () => {
      try {
        const {data} = await axios.get(
          `http://192.168.0.101:5000/api/product/${productId}`,
        );
        setProduct(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAProduct();
  }, [productId]);
  // const getAProducts = async () => {
  //   try {
  //     const {data} = await axios.get(
  //       `http://192.168.0.101:5000/api/product/${productId}`,
  //     );
  //     getProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAProducts();
  // }, []);
  // const data = [
  //   {
  //     size: 'XL',
  //   },
  //   {
  //     size: 'L',
  //   },
  //   {
  //     size: 'M',
  //   },
  //   {
  //     size: 'S',
  //   },
  // ];
  return (
    <View style={{flex: 1, backgroundColor: Colors.gray}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 50,
          //   backgroundColor: 'red',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="chevron-left" size={30} color="#000000" />
        </Pressable>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors.dark,
          }}>
          Product
        </Text>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            // alignSelf: 'center',
            borderRadius: 4,
          }}>
          <Icon name="cards-heart-outline" size={20} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 300,
            width: '100%',
          }}
          resizeMode="contain"
          source={{
            uri: product?.images[0],
          }}
        />
      </View>
      {/* size */}
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 50,
          justifyContent: 'space-around',
        }}></View>

      {/* mo ta */}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            paddingTop: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            {product?.title}
          </Text>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={20} color={Colors.primary} />
              <Icon name="star" size={20} color={Colors.primary} />
              <Icon name="star" size={20} color={Colors.primary} />
              <Icon name="star" size={20} color={Colors.primary} />
              <Icon name="star-half-full" size={20} color={Colors.primary} />
            </View>
            <Text>4.9</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, paddingTop: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            Description
          </Text>
          <Text style={{}}>{product?.description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            paddingTop: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
              }}>
              Giá
            </Text>
            <Text
              style={{
                color: Colors.dark,
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              {product?.price}
            </Text>
          </View>
          <View>
            {/* Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Bill')}
              style={{
                height: 50,
                width: 160,

                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 10,
                backgroundColor: Colors.primary,
              }}>
              <Text
                style={{
                  color: Colors.dark,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Add cards
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
