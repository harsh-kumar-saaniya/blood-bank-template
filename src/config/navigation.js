import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import StateManage from '../screens/StateManage';
import { Provider } from 'react-redux';
import store from '../store';


const Stack = createStackNavigator();


function AppNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="splash" component={SplashScreen} options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerShown: false
          }} />
          <Stack.Screen name="login" component={Login} options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerShown: false
          }} />
          <Stack.Screen name="Register" component={Register} options={{
            headerStyle: { backgroundColor: 'white' },
            headerShown: true,
          }} />
          <Stack.Screen name="StateManage" component={StateManage} options={{
            headerStyle: { backgroundColor: 'white' },
            headerShown: true,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default AppNavigation;