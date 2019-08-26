import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { CapView, CapText } from '../../styles';
import { padNumber } from '../../utils';
import colors from '../../styles/colors';

const CircleNumber = ({
  number, bgColor, wasChose, withBorder, onPress
}) => {
  const chooseColor = wasChose ? bgColor : colors.secondaryBackgroundColor;
  const borderWith = withBorder ? 2 : 0;
  return (
    <TouchableOpacity onPress={onPress}>
      <CapView mTop={8} mRight={8} pad={10} radius={24} bgColor={chooseColor} bdWith={borderWith}>
        <CapText ftSize="normal" secondary>
          {padNumber(number)}
        </CapText>
      </CapView>
    </TouchableOpacity>
  );
};

CircleNumber.propTypes = {
  /**
   * Specify a number to display
   */
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Specify view background color
   */
  bgColor: PropTypes.string,
  /**
   * Specifies whether the number was choose
   */
  wasChose: PropTypes.bool,
  /**
   * Specify whether to have a border
   */
  withBorder: PropTypes.bool,
  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * CircleNumber is clicked
   */
  onPress: PropTypes.func
};

CircleNumber.defaultProps = {
  number: 0,
  bgColor: colors.backgroundColor,
  wasChose: false,
  withBorder: false,
  onPress: () => {}
};

export default CircleNumber;
