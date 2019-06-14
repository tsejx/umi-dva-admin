module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {},
  rules: {
    // 允许未添加到项目依赖的模块引入
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js'],
      },
    ],
    // 未alias模块解析
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    // 函数和类必须标明返回类型
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    // 必须在使用前显式声明
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': 0,
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx'] }, },
    'react': {
      version: 'detect',
    }
  },
};
