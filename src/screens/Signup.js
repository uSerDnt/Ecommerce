import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Buttons';
import {color, ColorSpace} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigate = useNavigation();

  const handleNavigateLogin = () => {
    navigate.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{flex: 1, backgroundColor: Colors.gray}}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 25,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#0E0E0E',
            }}>
            Sign up
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
            <Buttons
              style={{
                marginRight: 10,
                backgroundColor: Colors.gray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="google-plus" size={22} color="black" />
            </Buttons>
            <Buttons
              style={{
                backgroundColor: Colors.gray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="facebook" size={22} color="black" />
            </Buttons>
          </View>
          <View
            styles={{
              paddingTop: 10,
            }}>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                Email address
              </Text>
              <TextInput
                style={{
                  backgroundColor: Colors.gray,
                  borderRadius: 10,
                }}
                placeholder="Enter Email address"
              />
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                First name
              </Text>
              <TextInput
                style={{
                  backgroundColor: Colors.gray,
                  borderRadius: 10,
                }}
                placeholder="Enter first name"></TextInput>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                Last name
              </Text>
              <TextInput
                style={{
                  backgroundColor: Colors.gray,
                  borderRadius: 10,
                }}
                placeholder="Enter last name"></TextInput>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                Password
              </Text>
              <TextInput
                style={{
                  backgroundColor: Colors.gray,
                  borderRadius: 10,
                }}
                placeholder="Enter password"></TextInput>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '800',
                }}>
                Must be 10 or more charcters
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 20,
              borderRadius: 10,
              marginHorizontal: 20,
            }}>
            <Buttons
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.primary,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.dark,
                }}>
                Sign up
              </Text>
            </Buttons>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>Already have an account?</Text>
            <Text
              onPress={handleNavigateLogin}
              style={{
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
