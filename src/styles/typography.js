import styled from '@emotion/native';
import { calculateMargin } from '../utils';
import colors from './colors';

const fontSizes = {
  title: 32,
  big: 24,
  medium: 18,
  normal: 16,
  small: 12,
};

export default styled.Text(props => ({
  fontFamily: props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue-Medium',
  // eslint-disable-next-line no-nested-ternary
  color: props.color
    ? props.color
    : props.secondary
    ? colors.secondaryText
    : colors.primaryText,
  fontSize: fontSizes[props.size] || fontSizes.small,
  ...calculateMargin(props),
}));
