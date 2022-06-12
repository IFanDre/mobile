import {
  BottomTabBarButtonProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {ThemeIcon} from './theme';

export interface ITabsHook {
  getNavigationTabScreenOptions: () => BottomTabNavigationOptions;
  getTabButton: (
    props: BottomTabBarButtonProps,
    icon: ThemeIcon,
    counter?: number,
  ) => JSX.Element;
  getTabCounter: (count: number) => JSX.Element;
}
