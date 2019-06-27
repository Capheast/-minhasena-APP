import React from 'react';
import { View, Dimensions } from 'react-native';
import { CapText } from '../../ui';

export default function NumberDrawn({ number, bgColor }) {
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View style={{
      backgroundColor: bgColor,
      borderRadius: 999,
      width: (deviceWidth - 64) / 8,
      height: (deviceWidth - 64) / 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
      marginRight: 8,
    }}
    >
      <CapText normal secondary>{number}</CapText>
    </View>
  );
}
