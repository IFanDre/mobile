import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

const Home = () => {
  return <Text>Hello Home</Text>;
};

const Settings = () => {
  return <Text>Hello Settings</Text>;
};

const User = () => {
  return <Text>Hello User</Text>;
};

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
        <Tab.Screen name="User" component={User} options={{title: 'User'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;
