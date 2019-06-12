import glamorous from 'glamorous-native';
import Colors from '../../styles/colors';

export const CapText = glamorous.text(props => ({
  flex: props.flex,
  fontFamily: props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue-Medium',
  marginTop: props.margin || props.vertical || props.top,
  marginBottom: props.margin || props.vertical || props.bottom,
  marginRight: props.margin || props.horizontal || props.right,
  marginLeft: props.margin || props.horizontal || props.left,
  color: props.secondary ? Colors.secondaryText : Colors.primaryText,
  fontSize: props.title
    ? 32
    : props.big
      ? 24
      : props.medium
        ? 18
        : props.normal
          ? 16 : 12
}));

export const Divider = glamorous.view(props => ({
  height: 1,
  backgroundColor: props.color || Colors.divider,
  marginTop: props.margin ? props.margin : props.vertical ? props.vertical : props.top || 0,
  marginBottom: props.margin ? props.margin : props.vertical ? props.vertical : props.bottom || 0,
  marginRight: props.margin ? props.margin : props.horizontal ? props.horizontal : props.right || 0,
  marginLeft: props.margin ? props.margin : props.horizontal ? props.horizontal : props.left || 0,
}));
