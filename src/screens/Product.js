import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
const Product = () => {
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
        <Pressable onPress={() => console.log('click')}>
          <Icon name="chevron-left" size={30} />
        </Pressable>
        <Text>Product</Text>
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
          <Icon name="cards-heart-outline" size={20} />
        </TouchableOpacity>
      </View>

      {/* Image */}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
