import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [{
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    'no-console': 'warn',
    'no-extra-semi': 'error',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],

    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }]
  },
  languageOptions: {
    sourceType: 'module',
    globals: {
      ...globals.browser
    }
  }
}]
