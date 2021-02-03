module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
    '@tmware'
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
    'no-unused-vars': 0,
    indent: 0,
    // "@typescript-eslint/array-type": [1, ]
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/indent': [2, 2, { SwitchCase: 1 }],
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/consistent-type-assertions': [2, { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }]
  }
}
