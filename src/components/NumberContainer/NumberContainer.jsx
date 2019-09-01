/* @flow */
import React from 'react';
import CircleNumber from '../CircleNumber';
import { CapText, colors } from '../../styles';

type Props = {
  selectedNumbers: Array<number>,
  drawnNumbers: Array<number>,
  color: string,
};

const NumberContainer = ({ selectedNumbers, drawnNumbers, color }: Props) => {
  const hasSelectedNumbers = selectedNumbers && selectedNumbers.length;
  const hasDrawnNumbers = drawnNumbers.length > 0;
  if (hasSelectedNumbers && hasDrawnNumbers) {
    return selectedNumbers.map((number, index) => (
      <CircleNumber
        key={index}
        bgColor={color}
        number={number}
        wasChosen={!!drawnNumbers.find(element => number === element)}
        withoutPress
      />
    ));
  }
  if (hasDrawnNumbers && !selectedNumbers) {
    return drawnNumbers.map((number, index) => (
      <CircleNumber
        key={index}
        bgColor={color}
        number={number}
        wasChosen
        withoutPress
      />
    ));
  }
  return (
    <CapText color={colors.labelText} mTop={12} size="normal">
      Nenhum número Escolhido
    </CapText>
  );
};

export default NumberContainer;
