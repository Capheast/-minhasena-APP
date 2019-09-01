/* @flow */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CapView, CapText } from '../../styles';
import { hexToRGB } from '../../utils';

type Props = {
  title: string,
  onPress: Function,
  color: string,
};

const Button = ({ title, onPress, color }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <CapView
      pad={12}
      justify="center"
      align="center"
      bgColor={hexToRGB(color, 0.1)}
      radius={8}
      row>
      <CapText color={color} size="normal">
        {title}
      </CapText>
    </CapView>
  </TouchableOpacity>
);

export default Button;
