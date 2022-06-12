import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {ThemeIcon} from '../theme';

export interface IIconProps {
  id?: string;
  name?: ThemeIcon;
  size?: number;
  height?: string | number;
  width?: string | number;
  color?: SvgProps['color'];
  style?: StyleProp<ViewStyle>;
}
