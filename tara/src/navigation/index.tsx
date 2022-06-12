import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Tabs from './Tabs';
import {StatusBar} from 'react-native';
import {NAVIGATION_SCREENS} from '../constants/screens';
import {COLORS, SIZES} from '../constants/theme';
import {Button, Icon} from '../components';

const Stack = createStackNavigator();

export default function AppStack() {
  const screenOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {paddingLeft: SIZES.padding},
    headerTitleStyle: {
      color: '#1C315B',
      fontWeight: '700',
      fontSize: SIZES.text,
      marginLeft: -SIZES.base,
      // fontFamily: fonts.MontserratRegular,
    },
    headerTitleAlign: 'center',
    gestureEnabled: false,
    headerLeft: ({onPress}) => {
      return (
        <Button
          width={33}
          height={33}
          radius={33}
          align="center"
          justify="center"
          onPress={onPress}
          color={COLORS.text}>
          <Icon name="home" size={12} color={String(COLORS.text)} />
        </Button>
      );
    },
  } as StackNavigationOptions;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={screenOptions}>
        {/*<Stack.Screen*/}
        {/*    name={NAVIGATION_SCREENS.SPLASH}*/}
        {/*    component={Splash}*/}
        {/*    options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*    name={NAVIGATION_SCREENS.ONBOARDING}*/}
        {/*    component={Onboarding}*/}
        {/*    options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen
          name={NAVIGATION_SCREENS.TABS}
          component={Tabs}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen*/}
        {/*  name={NAVIGATION_SCREENS.ACCOUNT}*/}
        {/*  component={Account}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name={NAVIGATION_SCREENS.PAYMENTS}*/}
        {/*  component={PaymentsStack}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
      </Stack.Navigator>
    </>
  );
}
