import {ReactNode} from 'react';
import {TextProps, TextStyle} from 'react-native';

export interface ITextProps extends TextProps {
  children?: ReactNode;
  size?: TextStyle['fontSize'];
  fontSize?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  center?: boolean;
  color?: TextStyle['color'];
  animated?: boolean;
  opacity?: TextStyle['opacity'];
  font?: TextStyle['fontFamily'];
  align?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];
  position?: TextStyle['position'];
  top?: TextStyle['top'];
  right?: TextStyle['right'];
  bottom?: TextStyle['bottom'];
  left?: TextStyle['left'];
  currencySymbol?: string;
}
