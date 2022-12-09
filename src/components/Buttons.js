import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

const Button = ({onPress, btn_text, style, children}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: Colors.primary,
          height: 50,
          flex: 1,
          width: '100%',
          marginBottom: 30,
          borderRadius: 10,
        },
        style,
      ]}
      onPress={onPress}>
      {children}
      {btn_text && (
        <Text
          style={{
            fontSize: 15,
            letterSpacing: 1.5,
            textAlign: 'center',
            position: 'relative',
            fontFamily: 'OpenSans-SemiBold',
            color: Colors.white,
          }}>
          {btn_text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
