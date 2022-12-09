import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ShopContext from '../context/ShopContext';
import Product from '../screens/Product';
import {Colors} from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
const SearchFilter = ({data, input, setInput}) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => {
          if (input === '') {
            return (
              <View
                style={{
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {item.name},
                </Text>
              </View>
            );
          }

          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginRight: 16,
                  width: '50%',
                  marginVertical: 10,
                  // minWidth: Dimensions.get('window').width / 2 - 24,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Product', {productId: item.id})
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
                    <Text style={[styles.price, {flex: 1}]}>
                      {item.price} đ
                    </Text>

                    <TouchableOpacity
                      activeOpacity={0.9}
                      //   onPress={() => addProductToCart(item)}
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
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
