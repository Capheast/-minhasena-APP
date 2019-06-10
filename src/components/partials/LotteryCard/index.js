import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import PropTypes from 'prop-types';
import Style from './style';
import FourLeafClover from '../../../assets/images/FourLeafClover.svg';
import { CapText } from '../../ui';

function LotteryCard({
  navigation, backgroundColor, border, title, subTitle
}) {
  return (
    <Transition appear="flip" disappear="top" shared={title}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Lottery',
          { title, subTitle, backgroundColor })}
      >
        <View style={Style(backgroundColor, border).card}>
          <View shared="card" style={Style().container}>
            <View style={Style().textContainer}>
              <CapText big bold secondary>{title}</CapText>
              <CapText secondary>{subTitle}</CapText>
            </View>
            <View style={Style().iconContainer}>
              <FourLeafClover width={144} height={144} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Transition>
  );
}

LotteryCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  border: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

LotteryCard.defaultProps = {
  border: true
};

export default withNavigation(LotteryCard);
