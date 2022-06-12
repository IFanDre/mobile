import {FlexStyle, ScrollViewProps, ViewProps, ViewStyle} from 'react-native';

export interface IBoxProps extends ViewProps, ScrollViewProps, FlexStyle {
  flex?: ViewStyle['flex'];
  row?: boolean;
  justify?: ViewStyle['justifyContent'];
  justifyContent?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  alignItems?: ViewStyle['alignItems'];
  content?: ViewStyle['alignContent'];
  alignContent?: ViewStyle['alignContent'];
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  color?: ViewStyle['backgroundColor'];
  radius?: ViewStyle['borderRadius'];
  topRadius?: ViewStyle['borderRadius'];
  borderWidth?: ViewStyle['borderWidth'];
  keyboard?: boolean;
  hideKeyboard?: boolean;
  animated?: boolean;
}
