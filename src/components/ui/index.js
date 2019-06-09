import glamorous from 'glamorous-native';
import Colors from '../../styles/colors';

export const CapText = glamorous.text(({
  flex, bold, secondary, title, big, medium, normal
}) => ({
  flex,
  fontFamily: bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue-Medium',
  color: secondary ? Colors.secondaryText : Colors.primaryText,
  fontSize: title
    ? 32
    : big
      ? 24
      : medium
        ? 18
        : normal
          ? 16 : 12
}));
