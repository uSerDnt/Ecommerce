import React, {useContext} from 'react';
import {View, Text, focused} from 'react-native';
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
import ListScreen from './src/screens/ListScreen';
import Bill from './src/screens/Bill';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalState from './src/context/GlobalState';
import ShopContext from './src/context/ShopContext';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {cart} = useContext(ShopContext);
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              color={focused ? '#FFBD5A' : '#000000'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search-outline"
              color={focused ? '#FFBD5A' : '#000000'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={ListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="heart-outline"
              color={focused ? '#FFBD5A' : '#000000'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Bill}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name="cart-outline"
                color={focused ? '#FFBD5A' : '#000000'}
                size={30}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'red',
                  borderRadius: 100,
                  position: 'absolute',
                  top: -6,
                  right: -6,
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  {cart.length}
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={focused ? '#FFBD5A' : '#000000'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={MyTabs} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Bill" component={Bill} />
          <Stack.Screen name="Addpay" component={Addpay} />
          <Stack.Screen name="Orderinfo" component={Orderinfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
  n;
};

export default App;
