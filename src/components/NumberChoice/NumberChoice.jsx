/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { CapView, CapText, colors } from '../../styles';
import CircleNumber from '../CircleNumber';
import Button from '../Button';

const showNumbers = (selectedNumbers, drawnNumbers, color) => {
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
    <CapText style={{ color: colors.labelText }} mTop={12} size="normal">
      Nenhum número Escolhido
    </CapText>
  );
};

const NumberChoice = ({
  title,
  subTitle,
  color,
  selectedNumbers,
  drawnNumbers,
  withoutSubmit,
  submitTitle,
  onSubmit,
}) => (
  <CapView>
    <CapText bold size="medium">
      {title}
    </CapText>
    {subTitle && (
      <CapText style={{ color: colors.labelText }}>{subTitle}</CapText>
    )}
    <CapView mBottom={16} row wrap>
      {showNumbers(selectedNumbers, drawnNumbers, color)}
    </CapView>
    {!withoutSubmit && (
      <Button title={submitTitle} onPress={onSubmit} color={color} />
    )}
  </CapView>
);

NumberChoice.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  color: PropTypes.string,
  drawnNumbers: PropTypes.arrayOf(PropTypes.number),
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  withoutSubmit: PropTypes.bool,
  submitTitle: PropTypes.string,
  onSubmit: PropTypes.func,
};

NumberChoice.defaultProps = {
  title: '',
  subTitle: '',
  color: colors.backgroundColor,
  drawnNumbers: [],
  selectedNumbers: null,
  withoutSubmit: false,
  submitTitle: '',
  onSubmit: () => {},
};

export default NumberChoice;
