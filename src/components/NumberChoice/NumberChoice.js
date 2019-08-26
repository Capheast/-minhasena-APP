import React from 'react';
import PropTypes from 'prop-types';
import { CapView, CapText } from '../../styles';
import CircleNumber from '../CircleNumber/CircleNumber';
import colors from '../../styles/colors';

const NumberChoice = ({
  title, subTitle, color, drawn
}) => (
  <CapView>
    {title && (
      <CapText bold ftSize="medium">
        {title}
      </CapText>
    )}
    {subTitle && <CapText style={{ color: 'rgba(0,0,0,0.38)' }}>{subTitle}</CapText>}
    <CapView row wrap>
      {drawn.map((number, index) => (
        <CircleNumber key={index} bgColor={color} number={number} />
      ))}
    </CapView>
  </CapView>
);

NumberChoice.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  color: PropTypes.string,
  drawn: PropTypes.arrayOf(PropTypes.number)
};

NumberChoice.defaultProps = {
  title: '',
  subTitle: '',
  color: colors.backgroundColor,
  drawn: []
};

export default NumberChoice;
