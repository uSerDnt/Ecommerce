import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Onboarding, Cart} from './src/screens';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import Listitem from './src/screens/Listitem';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import Credit from './src/screens/Credit';
import Addpay from './src/screens/Addpay';
import OrderN from './src/screens/OrderN';
import OrderY from './src/screens/OrderY';
import OrderScreen from './src/screens/OrderScreen';
import Voucher from './src/screens/Voucher';
import Orderinfo from './src/screens/Orderinfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={OrderScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  n;
};

export default App;
