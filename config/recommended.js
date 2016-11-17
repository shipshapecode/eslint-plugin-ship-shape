'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    'browser': true
  },
  plugins: [
    'ship-shape'
  ],
  rules: {
    // Built-in Rules
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': false
    }],
    'camelcase': ['error', {
      'properties': 'always'
    }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'generator-star-spacing': ['error', {'before': false}],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {'overrides': {'catch': {'after': false}}}],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'new-cap': ['error', {
      // Capital variables that can be used without `new`
      'capIsNewExceptions': [
        'A' // Ember.A
      ]
    }],
    'no-empty': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', {
      'uninitialized': 'always',
      'initialized': 'never'
    }],
    'operator-linebreak': ['error', 'before'],
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', {
      'avoidEscape': true
    }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      'words': false,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always'],

    // Ember Suave and Netguru Rules
    'ship-shape/order-in-components': 'error',
    'ship-shape/no-direct-property-access': 'error',
    'ship-shape/prefer-destructuring': 'error',
    'ship-shape/require-access-in-comments': 'error',
    'ship-shape/require-const-for-ember-properties': 'error'
  }
};
