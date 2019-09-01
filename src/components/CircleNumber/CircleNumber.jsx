/* @flow */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CapView, CapText, colors } from '../../styles';
import { padNumber } from '../../utils';

type Props = {
  number: number,
  bgColor: string,
  wasChosen?: boolean,
  withBorder?: Boolean,
  onPress: Function,
  withoutPress?: boolean,
};

const CircleNumber = ({
  number,
  bgColor,
  wasChosen,
  withBorder,
  onPress,
  withoutPress,
}: Props) => {
  const chooseColor = wasChosen ? bgColor : colors.secondaryBackgroundColor;
  const borderWith = withBorder ? 2 : 0;
  return (
    <TouchableOpacity disabled={withoutPress} onPress={onPress}>
      <CapView
        mTop={8}
        mRight={8}
        pad={10}
        radius={24}
        bgColor={chooseColor}
        bdWith={borderWith}>
        <CapText size="normal" secondary>
          {padNumber(number)}
        </CapText>
      </CapView>
    </TouchableOpacity>
  );
};

CircleNumber.defaultProps = {
  wasChosen: false,
  withBorder: false,
  withoutPress: false,
};

export default CircleNumber;
