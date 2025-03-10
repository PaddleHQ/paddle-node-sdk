import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.strict,
  stylistic.configs['recommended-flat'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
      '@stylistic/semi': 'off',
      '@stylistic/member-delimiter-style': 'off',
      '@stylistic/quotes': 'off',
      '@stylistic/quote-props': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/generator-star-spacing': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': [
        'error',
        'always',
        {
          js: 'always',
        },
      ],
    },
  },
];
