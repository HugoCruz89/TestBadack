import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Adventures, Income, Library} from 'modules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBarLabel} from 'components';
import Colors from './../constants/Colors';
import {windowHeight} from './../utils';

const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppStack = createStackNavigator();

const IconBack = () => {
  return (
    <Icon
      color="#FFFFFF"
      size={30}
      backgroundColor="#ffffff"
      name={'chevron-left'}
    />
  );
};

function HomeTabs() {
  const [initialRoute, setInitialRoute] = useState('home');

  function screenOptions({route}) {
    function tabBarIconConfig({color, size}) {
      let icon;
      switch (route.name) {
        case 'Home':
          icon = <Icon name="home" {...{color, size}} />;
          break;
        case 'Income':
          icon = <Icon name="trending-up" {...{color, size}} />;
          break;
        case 'Adventures':
          icon = <Icon name="sports-rugby" {...{color, size}} />;
          break;
        case 'Library':
          icon = <Icon name="book" {...{color, size}} />;
          break;
        default:
          icon = null;
          break;
      }
      return icon;
    }
    return {
      tabBarIcon: tabBarIconConfig,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: {
        height: windowHeight * 0.09,
        backgroundColor: '#000000',
      },
      sceneContainerStyle: {backgroundColor: 'transparent'},
    };
  }
  return (
    <Tab.Navigator
      initialRouteName={initialRoute}
      screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: ({color, focused}) => (
            <TabBarLabel {...{color, focused}} title="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Income"
        component={Income}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: ({color, focused}) => (
            <TabBarLabel {...{color, focused}} title="Income" />
          ),
        }}
      />
      <Tab.Screen
        name="Adventures"
        component={Adventures}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: ({color, focused}) => (
            <TabBarLabel {...{color, focused}} title="Adventures" />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: ({color, focused}) => (
            <TabBarLabel {...{color, focused}} title="Library" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppScreens(props) {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => <IconBack />,
      }}>
      <AppStack.Screen
        name="tabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Pagos',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}

export default AppScreens;
