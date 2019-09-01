import { hexToRGB } from '../utils';

const black = '#000000';
const white = '#ffffff';
const gray = '#BBBBBB';
const grayOpacity = 'rgba(0,0,0,0.1)';

export default {
  backgroundColor: white,
  secondaryBackgroundColor: gray,
  primaryText: black,
  labelText: hexToRGB(black, 0.38),
  secondaryText: white,
  border: grayOpacity,
  divider: grayOpacity,
  loading: '#DFDFDF',
};
