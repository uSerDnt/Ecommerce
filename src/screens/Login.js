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
import {useNavigation} from '@react-navigation/native';
import {color} from 'react-native-reanimated';



const Login = () => {
  
  const navigate = useNavigation();

  const handleNavigateSignUp = () => {
    navigate.navigate('Signup');
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
            Sign in
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
              flexDirection: 'column',
              paddingTop: 20,
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
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 24,
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
            </View>
          </View>
          <View
            style={{
              paddingTop: 100,
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
                Login
              </Text>
            </Buttons>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{}}>Dont have an account?</Text>
            <Text
              onPress={handleNavigateSignUp}
              style={{
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: '100%',
    width: '90%',
    fontFamily: 'OpenSans-Medium',
    paddingLeft: 20,
  },
  social_btn: {
    height: 55,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  social_img: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
});
