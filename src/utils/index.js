/* @flow */
export const padNumber = (value: number) => `0${value}`.slice(-2);

export const calculatePadding = ({
  padTop,
  padBottom,
  padLeft,
  padRight,
  padHorizontal,
  padVertical,
  pad,
}: {
  padTop: number,
  padBottom: number,
  padLeft: number,
  padRight: number,
  padHorizontal: number,
  padVertical: number,
  pad: number,
}) => ({
  paddingTop: pad || padVertical || padTop || 0,
  paddingBottom: pad || padVertical || padBottom || 0,
  paddingLeft: pad || padHorizontal || padLeft || 0,
  paddingRight: pad || padHorizontal || padRight || 0,
});

export const calculateMargin = ({
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHorizontal,
  mVertical,
  margin,
}: {
  mTop: number,
  mBottom: number,
  mLeft: number,
  mRight: number,
  mHorizontal: number,
  mVertical: number,
  margin: number,
}) => ({
  marginTop: margin || mVertical || mTop || 0,
  marginBottom: margin || mVertical || mBottom || 0,
  marginLeft: margin || mHorizontal || mLeft || 0,
  marginRight: margin || mHorizontal || mRight || 0,
});

export const generateLotteryNumbers = (
  min: number,
  max: number,
  quantity: number,
) => {
  const numbers = [];
  while (numbers.length < quantity) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    if (numbers.indexOf(number) === -1) {
      numbers.push(number);
    }
  }
  numbers.sort((a, b) => a - b);
  return numbers;
};

export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
