import {ColorValue, TouchableOpacityProps, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface IButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  color?: ViewStyle['backgroundColor'];
  outlined?: boolean;
  radius?: ViewStyle['borderRadius'];
  flex?: ViewStyle['flex'];
  row?: boolean;
  justify?: ViewStyle['justifyContent'];
  justifyContent?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  alignItems?: ViewStyle['alignItems'];
  center?: boolean;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  zIndex?: ViewStyle['zIndex'];
  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  disabled?: boolean | null;
  loading?: boolean;
  loadingColor?: ColorValue;
  label?: string;
  labelColor?: ColorValue;
  vibrate?: number | number[];
  borderWidth?: ViewStyle['borderWidth'];
  track?: string;
  haptic?: boolean;
  autoSize?: boolean;
}
