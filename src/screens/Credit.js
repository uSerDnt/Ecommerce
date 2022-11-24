import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Credit = () => {
  return (
    <View
      style={{
        flex: 1,
        color: Colors.gray,
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'center',
        }}>
        <Pressable onPress={() => console.log('click')}>
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
          <Text style={styles.header}>Credit/ Debit card</Text>
        </View>
      </View>
      {/* content */}
      <View style={styles.content}>
        <View
          style={{
            paddingTop: 30,
          }}>
          <Text style={styles.text}>Card number</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter card number"></TextInput>
        </View>
        <View
          style={{
            paddingTop: 10,
          }}>
          <Text style={styles.text}>Expire date</Text>
          <TextInput style={styles.textinput} placeholder="MM/YY"></TextInput>
        </View>
        <View
          style={{
            paddingTop: 10,
          }}>
          <Text style={styles.text}>Expire date</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter name card"></TextInput>
        </View>
        {/* button */}
        <View
          style={{
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            //backgroundColor: 'red',
          }}>
          <TouchableOpacity
            onPress={() => console.log('handle')}
            style={styles.button}>
            <Text style={styles.textbtn}>Save Card</Text>
          </TouchableOpacity>
        </View>
        {/* phuongthucthanhtoan */}

        <View
          style={{
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            We accept
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {/* momo */}
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: 'https://developers.momo.vn/v3/assets/images/circle-a14ff76cbd316ccef146fa7deaaace2e.png',
            }}
          />
          {/* visa */}
          <Image
            style={styles.image}
            resizeMode="center"
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
            }}
          />
          {/* paypal */}
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          {/* mastercard */}
          <Image
            style={styles.image}
            resizeMode="center"
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1990-1996.png',
            }}
          />
          {/* zalopay */}
          <Image
            style={styles.image}
            resizeMode="center"
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Credit;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  textinput: {backgroundColor: Colors.gray, borderRadius: 10},
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  textbtn: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  content: {
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
    paddingHorizontal: 16,
  },
});
