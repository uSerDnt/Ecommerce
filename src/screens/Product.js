import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ItemOrder from './ListScreen/ListOrder';
const Product = ({Home}) => {
  const navigation = useNavigation();

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
            uri: 'https://tse3.mm.bing.net/th?id=OIP.os71ZtsT8mkDlaykWbUGeQHaJ4&pid=Api&P=0',
          }}
        />
      </View>
      {/* size */}
      <View
        style={{
          flexDirection: 'row',
          // paddingHorizontal: 100,
          // justifyContent: 'space-between',

          paddingTop: 20,

          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 20,
            backgroundColor: Colors.primary,
          }}>
          <Text
            style={{
              color: Colors.dark,
            }}>
            XL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,

            borderRadius: 20,
            backgroundColor: Colors.primary,
          }}>
          <Text
            style={{
              color: Colors.dark,
            }}>
            L
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            borderRadius: 20,
            backgroundColor: Colors.primary,
          }}>
          <Text
            style={{
              color: Colors.dark,
            }}>
            M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('handle')}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            borderRadius: 20,
            backgroundColor: Colors.primary,
          }}>
          <Text
            style={{
              color: Colors.dark,
            }}>
            S
          </Text>
        </TouchableOpacity>
      </View>
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
            Áo thun vàng
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
          <Text style={{}}>
            Sản phẩm mới nhất, hot nhất 2022. Chất liệu mát, thích hợp đi học đi
            chơi, đi du lịch...
          </Text>
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
              25.000đ
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
