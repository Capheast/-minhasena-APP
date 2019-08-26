module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'react/no-array-index-key': 'off'
  },
  globals: {
    fetch: false
  }
};
