import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import PropTypes from 'prop-types';
import FourLeafClover from '../../assets/images/FourLeafClover.svg';
import { CapView, CapText } from '../../styles';
import colors from '../../styles/colors';

const Card = ({
  title, subTitle, withoutRadius, onPress, bgColor
}) => {
  const borderRadius = withoutRadius ? 0 : 8;
  return (
    <Transition shared={title}>
      <TouchableWithoutFeedback onPress={onPress}>
        <CapView
          row
          minHeight={120}
          padHorizontal={12}
          radius={borderRadius}
          bgColor={bgColor}
          style={{ overflow: 'hidden' }}
        >
          <CapView flex={1} justify="flex-end" padBottom={12}>
            <CapText ftSize="big" secondary bold>
              {title}
            </CapText>
            <CapText secondary>{subTitle}</CapText>
          </CapView>
          <CapView absolute right={12}>
            <FourLeafClover width={144} height={144} />
          </CapView>
        </CapView>
      </TouchableWithoutFeedback>
    </Transition>
  );
};

Card.propTypes = {
  /**
   * Specify card title
   */
  title: PropTypes.string,
  /**
   * Specify subtitle of card
   */
  subTitle: PropTypes.string,
  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * Card is clicked
   */
  onPress: PropTypes.func,
  /**
   * Specify view background color
   */
  bgColor: PropTypes.string,
  /**
   * Specifies whether the card will have a radius.
   */
  withoutRadius: PropTypes.bool
};

Card.defaultProps = {
  title: '',
  subTitle: '',
  onPress: () => {},
  bgColor: colors.backgroundColor,
  withoutRadius: false
};

export default Card;
