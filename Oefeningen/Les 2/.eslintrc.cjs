module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline'
      }
    ],
    'semi': [
      'error',
      'never'
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false
        },
        'multilineDetection': 'brackets'
      }
    ],
  }
}
