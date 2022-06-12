import React, {useCallback, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation';
import {Platform, StatusBar} from 'react-native';

const App = () => {
  const routeNameRef = useRef(null);
  const navigationRef = useRef(null);

  /* set status bar style */
  StatusBar.setBarStyle('dark-content');

  // set status bar to transparent
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }

  const handleReady = useCallback(() => {
    // @ts-ignore
    routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
  }, []);

  const handleStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    // @ts-ignore
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    // if DEV show navigation screens
    if (__DEV__) {
      console.info(
        '[navigation]',
        `${previousRouteName} -> ${currentRouteName}`,
      );
    }

    routeNameRef.current = currentRouteName;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleReady}
      onStateChange={handleStateChange}
      // linking={Linking}
    >
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
