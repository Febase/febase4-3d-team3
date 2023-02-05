/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^node:'],
          ['^@?\\w'],
          ['^'],
          ['^\\.'],
          [
            '^node:.*\\u0000$',
            '^@?\\w.*\\u0000$',
            '^[^.].*\\u0000$',
            '^\\..*\\u0000$',
          ],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
