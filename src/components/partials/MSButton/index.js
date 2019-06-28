import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const MSButton = ({ onPress = () => {}, title = '', background = ''}) => (
  <TouchableOpacity
    style={styles(background).container}
    onPress={() => onPress}
  >
    <View style={styles(background).button}>
      <Text style={styles(background).text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = colorPrimer => {
  if (colorPrimer.length === 0){
      return {
          container: {
              height: 50,
              margin: 10,
              width: 246,
              borderRadius: 8
          },
          button: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
          },
          text: {
              fontWeight: '500',
              opacity: 1
          }
      }
  }
  return {
      container: {
          backgroundColor: `${colorPrimer}1A`,
          height: 50,
          margin: 10,
          width: 246,
          borderRadius: 8
      },
      button: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      text: {
          color: colorPrimer,
          fontWeight: '500',
          opacity: 1
      }
  }

};
