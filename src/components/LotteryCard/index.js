import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Style from './style';
import FourLeafClover from '../../assets/images/FourLeafClover.svg';
import { CapText } from '../ui';

export default function LotteryCard({ backgroundColor, title, subTitle }) {
  return (
    <TouchableOpacity style={Style(backgroundColor).card} onPress={() => {}}>
      <View style={Style().container}>
        <View style={Style().textContainer}>
          <CapText big bold secondary>{title}</CapText>
          <CapText secondary>{subTitle}</CapText>
        </View>
        <View style={Style().iconContainer}>
          <FourLeafClover width={144} height={144} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

LotteryCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
