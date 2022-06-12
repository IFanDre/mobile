import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IBoxProps} from '../../types/components';

const Box = ({
  children,
  style,
  flex = 1,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  content,
  alignContent,
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  color,
  borderWidth,
  overflow,
  keyboard,
  hideKeyboard,
  zIndex,
  margin,
  marginBottom,
  marginTop,
  marginHorizontal,
  marginVertical,
  marginRight,
  marginLeft,
  padding,
  paddingBottom,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  paddingRight,
  paddingLeft,
  topRadius,
  ...props
}: IBoxProps) => {
  const boxStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    row && {flexDirection: 'row'},
    justify !== undefined && {justifyContent: justify},
    justifyContent !== undefined && {justifyContent},
    align !== undefined && {alignItems: align},
    alignItems !== undefined && {alignItems},
    content !== undefined && {alignContent: content},
    alignContent !== undefined && {alignContent},
    width !== undefined && {width},
    height !== undefined && {height},
    position !== undefined && {position},
    top !== undefined && {top},
    right !== undefined && {right},
    bottom !== undefined && {bottom},
    left !== undefined && {left},
    color !== undefined && {backgroundColor: color},
    topRadius !== undefined && {
      borderTopLeftRadius: topRadius,
      borderTopRightRadius: topRadius,
    },
    borderWidth !== undefined && {borderWidth},
    overflow !== undefined && {overflow},
    zIndex !== undefined && {zIndex},
    margin !== undefined && {margin},
    marginBottom !== undefined && {marginBottom},
    marginTop !== undefined && {marginTop},
    marginHorizontal !== undefined && {marginHorizontal},
    marginVertical !== undefined && {marginVertical},
    marginRight !== undefined && {marginRight},
    marginLeft !== undefined && {marginLeft},
    padding !== undefined && {padding},
    paddingBottom !== undefined && {paddingBottom},
    paddingTop !== undefined && {paddingTop},
    paddingHorizontal !== undefined && {paddingHorizontal},
    paddingVertical !== undefined && {paddingVertical},
    paddingRight !== undefined && {paddingRight},
    paddingLeft !== undefined && {paddingLeft},
    style,
  ]) as ViewStyle;

  if (keyboard) {
    return (
      <KeyboardAwareScrollView contentContainerStyle={boxStyle} {...props}>
        {children}
      </KeyboardAwareScrollView>
    );
  }

  if (hideKeyboard) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={boxStyle} {...props}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={boxStyle} {...props}>
      {children}
    </View>
  );
};

export default Box;
