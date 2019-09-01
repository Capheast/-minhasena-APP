import styled from '@emotion/native';
import { calculatePadding, calculateMargin } from '../utils';
import colors from './colors';

export const CapBackground = styled.ScrollView(props => ({
  flex: props.flex || 0,
  backgroundColor: props.bgColor || colors.backgroundColor,
  ...calculateMargin(props),
}));

export const CapView = styled.View(props => ({
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
  backgroundColor: props.bgColor || 'transparent',
}));

export const Divider = styled.View(props => ({
  height: 1,
  backgroundColor: props.color || colors.divider,
  ...calculateMargin(props),
}));
