import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Welcome from '../views/Welcome';
import Login from '../views/Login';
import Register from '../views/Register';
import HomeScreen from '../views/HomeScreen';
import OrdersScreen from '../views/OrdersScreen';
import SplashScreen from '../views/SplashScreen';

const navOptionHandler = () => ({
  headerShown: false,
});

const StackSplash = createStackNavigator();

function SplashStack({navigation, route}) {
  return (
    <StackSplash.Navigator initialRouteName="Splash">
      <StackSplash.Screen
        name="Splash"
        component={SplashScreen}
        options={navOptionHandler}
      />
    </StackSplash.Navigator>
  );
}

const StackWelcome = createStackNavigator();

function WelcomeStack({navigation, route}) {
  return (
    <StackWelcome.Navigator initialRouteName="Welcome">
      <StackWelcome.Screen
        name="Welcome"
        component={Welcome}
        options={navOptionHandler}
        // options={{title: 'Bienvenido'}}
      />
    </StackWelcome.Navigator>
  );
}

const StackLogin = createStackNavigator();

function LoginStack({navigation, route}) {
  return (
    <StackLogin.Navigator initialRouteName="Login">
      <StackLogin.Screen
        name="Login"
        component={Login}
        options={navOptionHandler}
      />
    </StackLogin.Navigator>
  );
}

const StackRegister = createStackNavigator();

function RegisterStack({navigation, route}) {
  return (
    <StackRegister.Navigator initialRouteName="Register">
      <StackRegister.Screen
        name="Register"
        component={Register}
        options={navOptionHandler}
      />
    </StackRegister.Navigator>
  );
}

const TabHome = createBottomTabNavigator();

function HomeTab({navigation, route}) {
  return (
    <TabHome.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <TabHome.Screen name="Home" component={HomeScreen} />
      <TabHome.Screen name="Orders" component={OrdersScreen} />
    </TabHome.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerApp() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
    </Drawer.Navigator>
  );
}

export {
  WelcomeStack,
  RegisterStack,
  LoginStack,
  HomeTab,
  DrawerApp,
  SplashStack,
};
