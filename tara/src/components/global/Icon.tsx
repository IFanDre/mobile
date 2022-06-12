import {IIconProps} from '../../types/components';
import icons from '../../assets/icons';
import {Platform, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const Icon = ({
  id,
  name,
  size,
  height,
  width,
  color,
  style,
  ...props
}: IIconProps) => {
  const svgFile = name ? icons[name] : null;

  if (!svgFile) {
    return null;
  }
  //TODO define 'grean' , 20, 20
  const iconColor = String(color || 'green');
  const iconHeight = height || size || 20;
  const iconWidth = width || size || 20;

  // create the iconStyle with the support from the above props
  const iconStyle = StyleSheet.flatten([style]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const iconID =
    Platform.OS === 'android'
      ? {accessibilityLabel: id || `${name}Icon`}
      : {testID: id || `${name}Icon`};

  return (
    <SvgXml
      {...iconID}
      xml={svgFile}
      style={iconStyle}
      color={iconColor}
      width={iconWidth}
      height={iconHeight}
      {...props}
    />
  );
};

export default Icon;
