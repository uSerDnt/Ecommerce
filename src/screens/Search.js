import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/Buttons';
import ShopContext from '../context/ShopContext';
const Search = ({navigation}) => {
  const {products, addProductToCart, cart} = useContext(ShopContext);
  console.log('products', cart);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.gray,
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'center',
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
            <Icon name="chevron-back" size={30} color="#000000" />
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
            Search Item
          </Text>
        </View>
      </View>
      {/* content */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          marginTop: 30,
        }}>
        <Icon name="search" size={20} style={styles.icon} />
        <TextInput
          style={{fontSize: 14, color: Colors.dark, fontWeight: '600', flex: 1}}
          placeholder="Search any thing"
          placeholderTextColor="#d6d9df"
        />
        <Pressable>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.dark,
              fontSize: 14,
              marginRight: 10,
            }}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  icon: {
    color: Colors.dark,
    marginLeft: 10,
  },
});
