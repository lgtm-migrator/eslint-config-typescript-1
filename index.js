module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    '@tmware',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script'
  },
  rules: {
    // "@typescript-eslint/array-type": [1, ]
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/brace-style': [2, 'stroustrup', { allowSingleLine: true }]
  }
}
