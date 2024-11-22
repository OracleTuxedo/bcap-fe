module.exports = {
  parser: '@typescript-eslint/parser',
  // extends: [
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:@typescript-eslint/recommended",
  //   "plugin:prettier/recommended" // Integrates Prettier
  // ],
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Marks Prettier violations as errors
    'react/prop-types': 'off', // Example: turn off prop-types if using TypeScript
  },
};
