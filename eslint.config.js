import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [{
  rules: {
    'no-console': 'warn',
    'no-unreachable': 'error',
    'curly': ['error', 'all'],
    'no-implicit-coercion': 'error',
    'no-useless-assignment': 'error',
    'preserve-caught-error': 'error',
    'eqeqeq': ['error', 'always', {
      null: 'ignore'
    }],
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_'
    }],

    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    '@stylistic/comma-spacing': ['error', {
      before: false,
      after: true
    }],
    '@stylistic/arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    '@stylistic/space-before-function-paren': ['error', {
      named: 'never',
      anonymous: 'always',
      asyncArrow: 'always'
    }]
  },
  plugins: {
    '@stylistic': stylistic
  },
  languageOptions: {
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node
    }
  }
}]
