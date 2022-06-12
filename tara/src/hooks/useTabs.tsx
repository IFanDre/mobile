import {useCallback, useMemo} from 'react';
import {
  BottomTabBarButtonProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {ITabsHook, ThemeIcon} from '../types';
import {Box, Button, Icon, Text} from '../components';
import {COLORS} from '../constants/theme';

export default function useTabs(): ITabsHook {
  const getNavigationTabScreenOptions =
    useCallback((): BottomTabNavigationOptions => {
      return {
        unmountOnBlur: true,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 30,
          lineHeight: 36,
          color: '#1C315B',
          fontWeight: '700',
          letterSpacing: 23 * 0.05,
          paddingHorizontal: 10,
          // fontFamily: fonts.InterRegular,
        },
        tabBarStyle: {
          elevation: 1,
          paddingTop: 12,
          paddingHorizontal: 10,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 12},
          shadowOpacity: 0.5,
          shadowRadius: 24,
        },
      } as BottomTabNavigationOptions;
    }, []);

  const getTabCounter = useCallback((count: number): JSX.Element => {
    return (
      <Box
        top={-10}
        right={10}
        width={16}
        radius={16}
        height={16}
        align="center"
        justify="center"
        position="absolute"
        borderWidth={2}
        color={'red'}
        style={{borderColor: '#FFF'}}>
        <Text size={8}>{count}</Text>
      </Box>
    );
  }, []);

  const getTabButton = useCallback(
    (
      props: BottomTabBarButtonProps,
      icon: ThemeIcon,
      counter?: number,
    ): JSX.Element => {
      const {onPress, accessibilityState} = props;

      const selected = accessibilityState?.selected;
      const activeColor = COLORS.tabLabelActive;
      const inactiveColor = COLORS.tabLabelInactive;

      const color = String(selected ? activeColor : inactiveColor);

      return (
        <Box align="center">
          <Button align="center" onPress={onPress}>
            <Icon size={22} name="home" color={color} />
            {counter ? getTabCounter(counter) : <></>}
          </Button>
        </Box>
      );
    },
    [getTabCounter],
  );

  return useMemo(
    () => ({
      getNavigationTabScreenOptions,
      getTabButton,
      getTabCounter,
    }),
    [getNavigationTabScreenOptions, getTabButton, getTabCounter],
  );
}
