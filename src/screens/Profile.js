import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.gray,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
        }}>
        <Pressable onPress={() => console.log('click')}>
          <View
            style={{
              position: 'absolute',
              top: 30 / 2,
            }}>
            <Ionicon name="chevron-back" size={30} color="#000000" />
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
            Profile
          </Text>
        </View>
      </View>
      {/* content */}
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
          paddingHorizontal: 16,
        }}>
        {/* avatar va info */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            resizeMode="cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <View
            style={{
              marginLeft: 16,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Doan Ngoc Trong
            </Text>
            <Text style={{color: '#cfcfcf', fontSize: 12}}>0335764560</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#b6b6b6',
                  height: 40,
                  width: 40,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                <MaterialIcon name="edit" size={20} color="#2b2b2b" />
              </View>
            </Pressable>
          </View>
        </View>
        {/* noidung */}
        {/* my order */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Ionicon name="cart-outline" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            My order
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
        {/* Voucher */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <MaterialIcon name="card-giftcard" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            Voucher
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
        {/* address */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <MaterialIcon name="gps-fixed" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            Address
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
        {/* payment */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <MaterialIcon name="credit-card" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            Payments Methods
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
        {/* contact */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <MaterialIcon name="contact-mail" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            Contact
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
        {/* Social */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Ionicon name="share-social" size={30} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              color: Colors.dark,
              marginLeft: 10,
            }}>
            Social Account
          </Text>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable onPress={() => console.log('click icon edit')}>
              <MaterialIcon name="navigate-next" size={30} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
