import React from 'react';
import {Animated, Text as RNText, TextStyle, StyleSheet} from 'react-native';
import {ITextProps} from '../../types/components';

const Text = ({
  children,
  size,
  weight,
  center,
  currencySymbol,
  color,
  animated,
  opacity,
  align,
  transform,
  allowFontScaling = true,
  adjustsFontSizeToFit = false,
  maxFontSizeMultiplier,
  position,
  top,
  right,
  bottom,
  left,
  style,
  ...props
}: ITextProps) => {
  const textStyle = StyleSheet.flatten([
    weight,
    center && {textAlign: 'center'},
    align,
    transform,
    size,
    color && {color},
    opacity && {opacity},
    position && {position},
    right !== undefined && {right},
    left !== undefined && {left},
    top !== undefined && {top},
    bottom !== undefined && {bottom},
    style,
  ]) as TextStyle;

  /* allow negative/positive % for spacing/letterSpacing, calculate based on fontSize */

  const currencyText = currencySymbol
    ? `${currencySymbol}${String(children).replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ',',
      )}`
    : null;

  if (animated) {
    return (
      <Animated.Text
        style={textStyle}
        allowFontScaling={allowFontScaling}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        maxFontSizeMultiplier={maxFontSizeMultiplier || 10}
        {...props}>
        {currencyText ?? children}
      </Animated.Text>
    );
  }

  return (
    <RNText
      style={textStyle}
      allowFontScaling={allowFontScaling}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      maxFontSizeMultiplier={maxFontSizeMultiplier || 10}
      {...props}>
      {currencyText ?? children}
    </RNText>
  );
};

export default Text;
