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
import React, {useContext} from 'react';
import {Colors} from '../constants/Colors';
import Buttons from '../components/Buttons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Product from './Product';
import {useNavigation} from '@react-navigation/native';
import ShopContext from '../context/ShopContext';
import GlobalState from '../context/GlobalState';

// const DATA = [
//   {
//     id: 1,
//     name: 'Áo thun vàng',
//     images:
//       'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
//     price: 120,
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: 'Áo thun đen',
//     images:
//       'https://tse4.mm.bing.net/th?id=OIP.bJ48jmA9X9y9bIiN6VBARgHaII&pid=Api&P=0',
//     price: 120,
//     rating: 2.0,
//   },
//   {
//     id: 3,
//     name: 'Áo khoác',
//     images:
//       'https://tse2.mm.bing.net/th?id=OIP.W4c_pkm0jjlf8KvJt_BCXgHaHa&pid=Api&P=0',
//     price: 120,
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: 'Áo nam',
//     images:
//       'https://tse3.mm.bing.net/th?id=OIP.oxk-NL-1_JfJUXFenTSzVAHaHK&pid=Api&P=0',
//     price: 120,
//     rating: 4.0,
//   },
// ];
const Home = ({navigation, props}) => {
  const {products, addProductToCart, cart} = useContext(ShopContext);
  console.log('cart', cart);
  const renderItem = ({item}) => (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: 'white',
        marginRight: 16,
        minWidth: Dimensions.get('window').width / 2 - 24,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Product', {productId: item.id})}>
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
              uri: item.images,
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
          {item.name}
        </Text>
        {/* rating */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="star" size={16} color={Colors.primary} />
          <Text style={{fontWeight: 'bold', color: Colors.dark}}>
            {item.rating}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.price}>{item.price} đ</Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => addProductToCart(item)}
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
            <TextInput
              style={{
                backgroundColor: Colors.white,
                borderRadius: 10,
                height: 40,
                flex: 1,
              }}
              placeholder="Find product"
            />
            <TouchableOpacity onPress={() => console.log('click')}>
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
        </View>
      }
      columnWrapperStyle={{marginTop: 20}}
      data={products}
      contentContainerStyle={{
        marginLeft: 16,
      }}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => item.id}
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
