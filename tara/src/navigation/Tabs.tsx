import * as React from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Notifications from '../screens/Notifications';

import {StatusBar} from 'react-native';
import {TAB_SCREENS} from '../constants/screens';
import {Messages, Payments, Products} from '../screens';
import useTabs from '../hooks/useTabs';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const {getNavigationTabScreenOptions, getTabButton} = useTabs();

  const screenOptions = getNavigationTabScreenOptions();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName={TAB_SCREENS.PRODUCTS}>
        <Tab.Screen
          name={TAB_SCREENS.PRODUCTS}
          component={Products}
          options={{
            title: 'Events',
            tabBarButton: (props: BottomTabBarButtonProps) => {
              return getTabButton(props, 'home');
            },
          }}
        />
        <Tab.Screen
          name={TAB_SCREENS.MESSAGES}
          component={Messages}
          options={{
            title: 'Chat',
            headerLeft: () => undefined,
            tabBarButton: (props: BottomTabBarButtonProps) => {
              return getTabButton(props, 'home', 4);
            },
          }}
        />
        <Tab.Screen
          name={TAB_SCREENS.PAYMENTS}
          component={Payments}
          options={{
            title: 'Payments',
            tabBarButton: (props: BottomTabBarButtonProps) => {
              return getTabButton(props, 'home');
            },
          }}
        />
        <Tab.Screen
          name={TAB_SCREENS.NOTIFICATIONS}
          component={Notifications}
          options={{
            title: 'Notifications',
            tabBarButton: (props: BottomTabBarButtonProps) => {
              return getTabButton(props, 'home', 2);
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
