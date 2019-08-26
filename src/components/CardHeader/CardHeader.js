import React from 'react';
import PropTypes from 'prop-types';
import { CapText } from '../../styles';

export default function CardHeader({ title, index }) {
  const isFirst = index === 0;
  return (
    <CapText
      title={isFirst}
      ftSize={isFirst ? 'title' : 'big'}
      bold
      mTop={isFirst ? 0 : 16}
      mBottom={16}
    >
      {title}
    </CapText>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number
};

CardHeader.defaultProps = {
  title: '',
  index: 0
};
