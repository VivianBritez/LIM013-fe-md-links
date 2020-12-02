module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base', // "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    camelcase: 2,
    'space-infix-ops': 2,
    'no-console': 'off',
    'linebreak-style': 0,
  },
};
