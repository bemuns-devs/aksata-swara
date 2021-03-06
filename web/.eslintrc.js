module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    // '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // ts
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // vue
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/multi-word-component-names': 'off',

    // js
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'func-names': 'off',
    'max-len': ['warn', {
      code: 150,
      // will ignore everything inside html attrs
      ignorePattern: '[\\w-]+="([^"]*)"',
    }],
    'no-unused-vars': 'off',
    'no-undef': 'off',

    'no-underscore-dangle': 'off',
  },
};
