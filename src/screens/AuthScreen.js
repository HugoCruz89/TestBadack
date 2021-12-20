import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, FormLoginScreen, Welcome} from 'modules';

const AuthStack = createStackNavigator();
const AuthScrens = navData => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="FormLoginScreen"
        component={FormLoginScreen}
        options={{
          headerShown: false,
          title: 'FormLoginScreen',
          headerTitleAlign: 'center',
        }}
      />
    </AuthStack.Navigator>
  );
};
export default AuthScrens;
