import React from 'react';
import { View } from 'react-native';
import NumberDraw from '../NumberDrawn';

export default function NumberContainer({ numbers, bgColor }) {
  const padNumber = number => (`0${number}`).slice(-2);
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }}
    >
      {numbers.map(
        (number, index) => <NumberDraw key={index.toString()} number={padNumber(number)} bgColor={bgColor} />
      )}
    </View>
  );
}
