export const padNumber = value => `0${value}`.slice(-2);

export const calculatePadding = ({
  padTop,
  padBottom,
  padLeft,
  padRight,
  padHorizontal,
  padVertical,
  pad
}) => ({
  paddingTop: pad || padVertical || padTop || 0,
  paddingBottom: pad || padVertical || padBottom || 0,
  paddingLeft: pad || padHorizontal || padLeft || 0,
  paddingRight: pad || padHorizontal || padRight || 0
});

export const calculateMargin = ({
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHorizontal,
  mVertical,
  margin
}) => ({
  marginTop: margin || mVertical || mTop || 0,
  marginBottom: margin || mVertical || mBottom || 0,
  marginLeft: margin || mHorizontal || mLeft || 0,
  marginRight: margin || mHorizontal || mRight || 0
});

export const generateLotteryNumbers = (min, max, quantity) => {
  const numbers = Array(quantity).fill(0);
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  numbers.sort((a, b) => a - b);
  return numbers;
};
