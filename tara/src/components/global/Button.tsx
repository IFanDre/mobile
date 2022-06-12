import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Vibration,
  GestureResponderEvent,
} from 'react-native';
import {IButtonProps} from '../../types/components';
import Text from './Text';

const Button = ({
  children,
  color,
  outlined,
  radius,
  flex,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  center,
  height,
  width,
  zIndex,
  position,
  top,
  right,
  bottom,
  left,
  disabled,
  vibrate,
  borderWidth,
  loading = false,
  loadingColor,
  label,
  labelColor,
  hitSlop = {top: 8, left: 8, bottom: 8, right: 8},
  onPress,
  autoSize,
  ...props
}: IButtonProps) => {
  // create the buttonStyle with the support from the above props
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && {backgroundColor: color},
    outlined && {
      borderColor: color,
      backgroundColor: 'transparent',
      borderWidth: borderWidth || StyleSheet.hairlineWidth,
    },
    radius !== undefined && {borderRadius: radius},
    flex !== undefined && {flex},
    row && {flexDirection: 'row'},
    justify !== undefined && {justifyContent: justify},
    justifyContent !== undefined && {justifyContent},
    align !== undefined && {alignItems: align},
    alignItems !== undefined && {alignItems},
    center !== undefined && {justifyContent: 'center', alignItems: 'center'},
    autoSize === undefined && {minHeight: height || 48},
    autoSize === undefined && {minWidth: width || 48},
    zIndex !== undefined && {zIndex},
    position !== undefined && {position},
    top !== undefined && {top},
    right !== undefined && {right},
    bottom !== undefined && {bottom},
    left !== undefined && {left},
    disabled && {opacity: 0.3},
  ]) as ViewStyle;

  /* handle onPress event */
  const handlePress = useCallback(
    async (event: GestureResponderEvent) => {
      onPress?.(event);

      /* vibrate support onPress */
      if (vibrate !== undefined) {
        Vibration.vibrate(vibrate);
      }
    },
    [vibrate, onPress],
  );

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={loading || disabled}
      onPress={handlePress}
      hitSlop={hitSlop}
      {...props}>
      {loading ? (
        <ActivityIndicator color={loadingColor} size="small" />
      ) : label ? (
        <Text center color={labelColor}>
          {label}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
