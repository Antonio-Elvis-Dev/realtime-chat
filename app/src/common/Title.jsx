import {View, Text} from 'react-native';
import React from 'react';
export const Title = ({text, color})=> {
  return (
    <Text
      style={{
        color: color,
        textAlign: 'center',
        fontSize: 48,
        fontFamily: 'LeckerliOne-Regular',
      }}>
      {text}
    </Text>
  );
};
