import glamorous from 'glamorous-native';
import colors from './colors';
import { calculateMargin } from '../utils';

const fontSizes = {
  title: 32,
  big: 24,
  medium: 18,
  normal: 16,
  small: 12
};

export const CapText = glamorous.text(props => ({
  fontFamily: props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue-Medium',
  color: props.secondary ? colors.secondaryText : colors.primaryText,
  fontSize: fontSizes[props.ftSize] || fontSizes.small,
  ...calculateMargin(props)
}));
