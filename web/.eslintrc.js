module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
  plugins: [
    '@typescript-eslint',
    'vue',
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
    'func-names': 'off',
    'max-len': ['warn', {
      code: 150,
      // will ignore everything inside html attrs
      ignorePattern: '[\\w-]+="([^"]*)"',
    }],
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};
