import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Buttons from '../components/Buttons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Product from './Product';

// loadsanpham. dathang
const DATA = [
  {
    id: 1,
    name: 'Áo thun',
    images:
      'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
    price: 120,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Áo sơ mi',
    images:
      'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
    price: 120,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Áo khoác',
    images:
      'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
    price: 120,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Áo nam',
    images:
      'https://media.istockphoto.com/id/1364024617/zh/%E5%90%91%E9%87%8F/realistic-white-t-shirt-base-cloth-isolated-on-transparent-background-blank-mockup-for-branding.jpg?s=612x612&w=0&k=20&c=xVD1vljzh2oVKl_LsA32Us4-zxzUOjMMKtU4t6CsuRA=',
    price: 120,
    rating: 4.7,
  },
];
const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          width: '45%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Product', item)}>
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
        <Text
          style={{
            color: Colors.dark,
          }}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="star" size={16} color={Colors.primary} />
          <Text style={{fontWeight: 'bold', color: Colors.dark}}>
            {item.rating}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>{item.price} đ</Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Bill')}
            style={{
              height: 30,
              backgroundColor: Colors.primary,
              flex: 1,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwesome
              name="heart-o"
              size={16}
              style={{marginHorizontal: 8}}
            />
            <Text
              style={{
                color: Colors.dark,
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              Add Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
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
                <Ionicon name="search" size={30} />
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
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={DATA}
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
