import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/Buttons';
import ShopContext from '../context/ShopContext';
import {SearchBar} from 'react-native-element';
import react from 'react';
import SearchFilter from '../components/SearchFilter';
const Search = ({navigation, value, onChangeText}) => {
  const {products, addProductToCart, cart} = useContext(ShopContext);
  console.log('products', products);
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.gray,
        marginHorizontal: 16,
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
          height: 44,
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          marginTop: 30,
        }}>
        <Icon name="search" size={20} style={styles.icon} />
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          style={{fontSize: 14, color: Colors.dark, fontWeight: '600', flex: 1}}
          placeholder="Search any thing"
          placeholderTextColor="#d6d9df"
        />
      </View>
      <SearchFilter data={products} input={input} setInput={setInput} />
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
