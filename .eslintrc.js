module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['*.config.js', '**/*.test.jsx'] },
    ],
  },
  plugins: ['prettier'],
};
