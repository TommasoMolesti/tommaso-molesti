module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
          legacyDecorators: true
      }
  },
  env: {
      browser: true,
      amd: true,
      es6: true,
      jest: true,
      node: true
  },
  extends: [
      'airbnb/base',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
      'plugin:promise/recommended'
  ],
  rules: {
      'no-restricted-imports': 'off',
      'import/no-relative-packages': 'off',
      // BREAKS references to src/libs.
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-cycle': 'off',
      'import/order': [
          'error',
          {
              'newlines-between': 'always',
              alphabetize: { order: 'asc' }
          }
      ],
      'import/newline-after-import': 'error',
      'import/no-mutable-exports': 'error',
      'import/prefer-default-export': 'off',
      // 'import/no-default-export': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      // 'import/no-dynamic-require': 'warn',
      // 'promise/prefer-await-to-callbacks': 'error', // Remove callbacks later..
      'promise/always-return': 'off', // Too restrictive at the moment.
      'promise/catch-or-return': 'off',
      'default-param-last': 'off',
      'prettier/prettier': [
          'error',
          {
              printWidth: 120,
              trailingComma: 'none',
              useTabs: false,
              tabWidth: 4,
              semi: true,
              singleQuote: true,
              endOfLine: 'auto'
          }
      ],
      'linebreak-style': 'off',
      indent: 'off', // Use prettier's indentation.
      'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
      'no-console': 'off',
      'class-methods-use-this': 'off',
      // 'function-paren-newline': ['error', 'consistent'],
      'object-curly-newline': ['error', { consistent: true }],
      'no-restricted-syntax': 'off', // We don't need these restrictions.
      'no-restricted-properties': 'off', // We use Math.pow. It's cleaner in most cases than using the ** operator
      'no-plusplus': 'off',
      eqeqeq: ['error', 'smart'],
      'no-case-declarations': 'off',
      'comma-dangle': ['error', 'never'],
      'no-unused-vars': 'off',
      'no-param-reassign': 'off',
      'no-continue': 'off', // Correct usage before re-enabling
      'object-shorthand': 'off',
      'guard-for-in': 'off', // Error isn't relevant when using const, and we have prefer-const enabled.
      'no-prototype-builtins': 'off', // We aren't using Object.create and our target is not node.
      'prefer-promise-reject-errors': 'off', // Look into re-enabling this later.
      'no-shadow': 'off', // More annoying than it is helpful.
      'prefer-destructuring': 'off', // Needs extra effort to follow this rigidly.
      'operator-assignment': 'off', // Things like += is ok, but enforcing >>=, **= and similar is bonkers.
      // Enable on next runs.
      'consistent-return': 'off',
      'no-underscore-dangle': 'off',
      'no-async-promise-executor': 'off',
      'no-use-before-define': 'off',
      'no-redeclare': 'off',
      'vars-on-top': 'off',
      'func-names': 'off',
      'import/no-self-import': 'off',
      'no-empty': 'off',
      'global-require': 'off',
      'import/no-dynamic-require': 'off',
      'no-proto': 'off',
      'prefer-rest-params': 'off',
      'promise/no-nesting': 'off',
      'lines-between-class-members': 'off', // Requires adding a new line between every field.
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      curly: ['error', 'all']
  }
};
