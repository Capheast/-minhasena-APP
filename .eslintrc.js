module.exports = {
  extends: ['airbnb/hooks', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
