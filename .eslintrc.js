module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 'error',
    'arrow-parens': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'lines-between-class-members': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '*/factories/*.ts'] },
    ],
    'import/prefer-default-export': 'off',
    indent: 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'operator-linebreak': 'off',
    strict: 'off',
  },
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['node_modules', './src'],
        extensions: ['.ts', '.d.ts'],
      },
    },
  },
};
