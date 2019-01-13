import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, styleBtn, styleTxt }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, styleBtn]}>
      <Text style={[textStyle, styleTxt]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonStyle: {
    backgroundColor: '#F23C50',
    marginTop: 10
  }
};

export {Button};