import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttons from '../components/Buttons';

const DATA = [
  {
    id: 1,
    name: 'Áo thun',
    images: 'https://img.lovepik.com/element/40027/2204.png_300.png',
    size: 'L',
    price: 120,
  },
  {
    id: 2,
    name: 'Áo thun',
    images: 'https://img.lovepik.com/element/40027/2204.png_300.png',
    size: 'L',
    price: 120,
  },
  {
    id: 3,
    name: 'Áo thun',
    images: 'https://img.lovepik.com/element/40027/2204.png_300.png',
    size: 'L',
    price: 120,
  },
  {
    id: 4,
    name: 'Áo thun',
    images: 'https://img.lovepik.com/element/40027/2204.png_300.png',
    size: 'L',
    price: 120,
  },
];

const Listitem = () => {
  const renderItem = ({item}) => {
    <View>
      <View>
        <Image
          style={{
            height: 120,
            width: '90%',
            marginVertical: 10,
          }}
          source={{
            uri: item.images,
          }}
        />
      </View>
    </View>;
  };

  return (
    <FlatList
      ListHeaderComponent={
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.gray,
          }}>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              alignItems: 'center',
              height: 50,

              justifyContent: 'center',
            }}>
            <Pressable onPress={() => console.log('click')}>
              <Icon name="chevron-left" size={30} color="#000000" />
            </Pressable>
            <View
              style={{
                paddingHorizontal: 90,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                Lưu tất cả sản phẩm
              </Text>
            </View>
          </View>
        </View>
      }
      // columnWrapperStyle={{justifyContent: 'space-between'}}
      // data={DATA}
      // renderItem={renderItem}
      // numColumns={2}
      // keyExtractor={item => item.id}
    />
  );
};

export default Listitem;

const styles = StyleSheet.create({});
