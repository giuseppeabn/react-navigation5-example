import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  WelcomeStack,
  RegisterStack,
  LoginStack,
  DrawerApp,
  SplashStack,
} from './src/navigation/navigation';

const StackApp = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
        <NavigationContainer>
          <SplashStack />
        </NavigationContainer>
      );
    }
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="Drawer">
          <StackApp.Screen name="Welcome" component={WelcomeStack} />
          <StackApp.Screen name="Login" component={LoginStack} />
          <StackApp.Screen name="Register" component={RegisterStack} />
          <StackApp.Screen name="Drawer" component={DrawerApp} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
