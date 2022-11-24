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
      <View style={styles.viewall}>
        <View style={styles.viewheader}>
          <Text style={styles.headertext}>Sign up</Text>
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
          <View
            styles={{
              paddingTop: 10,
            }}>
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
                paddingTop: 10,
              }}>
              <Text style={styles.textact}>First name</Text>
              <TextInput
                style={styles.edtact}
                placeholder="Enter first name"></TextInput>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              }}>
              <Text style={styles.textact}>Last name</Text>
              <TextInput
                style={styles.edtact}
                placeholder="Enter last name"></TextInput>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
              }}>
              <Text style={styles.textact}>Password</Text>
              <TextInput
                style={styles.edtact}
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
          <View style={styles.viewfooter}>
            <Buttons style={styles.Sign}>
              <Text style={styles.textSign}>Sign up</Text>
            </Buttons>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>Already have an account?</Text>
            <Text onPress={handleNavigateLogin} style={styles.textlogin}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  viewall: {flex: 1, backgroundColor: Colors.gray},
  viewheader: {
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
  viewSign: {
    paddingTop: 100,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  Sign: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  textlogin: {
    fontWeight: 'bold',
    color: Colors.dark,
  },
  viewfooter: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
