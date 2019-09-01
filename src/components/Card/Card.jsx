/* @flow */
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import FourLeafClover from '../../assets/images/FourLeafClover.svg';
import { CapView, CapText } from '../../styles';

type Props = {
  title: string,
  subTitle: string,
  onPress: Function,
  bgColor: string,
  withoutRadius?: boolean,
};

const Card = ({ title, subTitle, withoutRadius, onPress, bgColor }: Props) => {
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
          style={{ overflow: 'hidden' }}>
          <CapView flex={1} justify="flex-end" padBottom={12}>
            <CapText size="big" secondary bold>
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

Card.defaultProps = {
  withoutRadius: false,
};

export default Card;
