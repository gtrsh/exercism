import js from '@eslint/js'
import globals from 'globals'

import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@stylistic': stylistic,
    },
    rules: {
      // Отключаем требование semicolon
      semi: ['error', 'never'],
      '@stylistic/semi': ['error', 'never'],

      // Автоматическая вставка semicolon (ASI) безопасность
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',

      // Защита от проблемных случаев ASI
      'no-sequences': 'error',
      'wrap-iife': ['error', 'inside'],

      // Общие правила безопасности
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-var-requires': 'error',

      // Современный JavaScript/TypeScript
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',

      // Безопасность без semicolon
      'no-floating-decimal': 'error',
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }],

      // Запрет опасных конструкций для ASI
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',

      // Форматирование
      indent: ['error', 2],
      quotes: ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: { ...globals.node },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'never'],
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-sequences': 'error',
      'wrap-iife': ['error', 'inside'],
    },
  },
]
