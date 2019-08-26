import glamorous from 'glamorous-native';
import colors from './colors';
import { calculatePadding, calculateMargin } from '../utils';

export const CapBackground = glamorous.scrollView(props => ({
  flex: props.flex || 0,
  backgroundColor: props.bgColor || colors.backgroundColor,
  ...calculateMargin(props)
}));

export const CapView = glamorous.view(props => ({
  flex: props.flex || 0,
  position: props.absolute ? 'absolute' : 'relative',
  flexDirection: props.row ? 'row' : 'column',
  justifyContent: props.justify || 'flex-start',
  alignContent: props.align || 'stretch',
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
  ...calculatePadding(props),
  ...calculateMargin(props),
  minHeight: props.minHeight || 0,
  borderColor: props.bdColor || colors.border,
  borderWidth: props.bdWith || 0,
  borderRadius: props.radius || 0,
  backgroundColor: props.bgColor || 'transparent'
}));
