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
        <View style={styles.header}>
          <Text style={styles.headertext}>Sign in</Text>
        </View>
        <View style={styles.bg}>
          <View style={styles.contentv}>
            <Buttons style={styles.buttongg}>
              <Icon name="google-plus" size={22} color="black" />
            </Buttons>
            <Buttons style={styles.buttonfb}>
              <Icon name="facebook" size={22} color="black" />
            </Buttons>
          </View>
          <View>
            <View
              style={{
                paddingHorizontal: 20,
              }}>
              <Text style={styles.textact}>Email address</Text>
              <TextInput
                style={styles.edtact}
                placeholder="Enter Email address"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 20,
              }}>
              <Text style={styles.textact}>Password</Text>
              <TextInput
                style={styles.edtact}
                placeholder="Enter password"></TextInput>
            </View>
          </View>
          <View style={styles.viewlogin}>
            <Buttons style={styles.login}>
              <Text style={styles.textlogin}>Login</Text>
            </Buttons>
          </View>
          <View style={styles.viewfooter}>
            <Text>Dont have an account?</Text>
            <Text onPress={handleNavigateSignUp} style={styles.textsignup}>
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
  header: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  bg: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentv: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  buttongg: {
    marginRight: 10,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonfb: {
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textact: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  edtact: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
  viewlogin: {
    paddingTop: 100,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  textlogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  textsignup: {
    fontWeight: 'bold',
    color: Colors.dark,
  },
  viewfooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
