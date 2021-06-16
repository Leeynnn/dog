module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-undef": 0,
    "vue/no-use-v-if-with-v-for": "off",
    // "vue/no-use-v-if-with-v-for": ["error", {
    //   "allowUsingIterationVar": true
    // }],
    "vue/no-parsing-error": 'off',
    "no-prototype-builtins": 'off',
    "no-useless-escape": 'off',
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)'
    ],
    env: {
      mocha: true
    }
  }]
}