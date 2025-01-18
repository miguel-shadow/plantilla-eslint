import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";


/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    // ESlint
    rules: {
      "array-callback-return": ["error", { checkForEach: true }],
      "arrow-body-style": ["warn", "as-needed"],
      camelcase: ["warn", { properties: "never" }],
      complexity: ["warn", 5],
      "consistent-return": "warn",
      "constructor-super": "error",
      "default-case-last": "warn",
      "default-param-last": "warn",
      eqeqeq: ["warn", "smart"],
      "for-direction": "error",
      "func-style": ["warn", "expression"],
      "getter-return": "error",
      "max-depth": ["warn", 5],
      "max-lines-per-function": [
        "warn",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-lines": [
        "warn",
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-params": ["warn", 4],
      "no-alert": "warn",
      "no-array-constructor": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "warn",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-control-regex": "warn",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "warn",
      "no-empty-character-class": "warn",
      "no-empty-function": "warn",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-empty": "warn",
      "no-eval": "error",
      "no-ex-assign": "warn",
      "no-extra-boolean-cast": "error",
      "no-extra-label": "error",
      "no-fallthrough": "warn",
      "no-func-assign": "warn",
      "no-global-assign": "error",
      "no-implied-eval": "error",
      "no-import-assign": "warn",
      "no-invalid-regexp": "warn",
      "no-irregular-whitespace": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loss-of-precision": "warn",
      "no-misleading-character-class": "warn",
      "no-multi-assign": "warn",
      "no-new-native-nonconstructor": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "warn",
      "no-return-assign": "error",
      "no-self-assign": "warn",
      "no-self-compare": "warn",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "warn",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unreachable-loop": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "warn",
      "no-unused-vars": "warn",
      "no-use-before-define": "off",
      "no-useless-assignment": "warn",
      "no-useless-backreference": "warn",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-var": "error",
      "no-with": "error",
      "object-shorthand": "error",
      "operator-assignment": "error",
      "prefer-destructuring": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-regex-literals": "error",
      "prefer-rest-params": "error",
      "prefer-template": "warn",
      "require-yield": "error",
      "symbol-description": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      yoda: "error",

      // ESlint Style
      "@stylistic/js/array-bracket-newline": ["error", "consistent"],
      "@stylistic/js/array-bracket-spacing": ["error", "never", { singleValue: true }],
      "@stylistic/js/array-element-newline": [
        "error",
        {
          consistent: true,
          multiline: true,
        },
      ],
      "@stylistic/js/arrow-parens": ["error", "as-needed"],
      "@stylistic/js/arrow-spacing": "error",
      "@stylistic/js/block-spacing": "error",
      "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/js/comma-dangle": ["error", "always-multiline"],
      "@stylistic/js/comma-spacing": "error",
      "@stylistic/js/comma-style": "error",
      "@stylistic/js/computed-property-spacing": "error",
      "@stylistic/js/dot-location": ["error", "property"],
      "@stylistic/js/eol-last": "error",
      "@stylistic/js/function-call-spacing": "error",
      "@stylistic/js/function-paren-newline": ["error", "multiline"],
      "@stylistic/js/generator-star-spacing": "error",
      "@stylistic/js/implicit-arrow-linebreak": "error",
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/js/key-spacing": "error",
      "@stylistic/js/keyword-spacing": "error",
      "@stylistic/js/lines-around-comment": "error",
      "@stylistic/js/max-len": ["warn", 150],
      "@stylistic/js/max-statements-per-line": ["warn", { max: 2 }],
      "@stylistic/js/multiline-ternary": ["error", "always-multiline"],
      "@stylistic/js/new-parens": "warn",
      "@stylistic/js/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
      "@stylistic/js/no-extra-semi": "error",
      "@stylistic/js/no-floating-decimal": "error",
      "@stylistic/js/no-multi-spaces": "error",
      "@stylistic/js/no-multiple-empty-lines": "error",
      "@stylistic/js/no-tabs": "error",
      "@stylistic/js/no-trailing-spaces": "error",
      "@stylistic/js/no-whitespace-before-property": "error",
      "@stylistic/js/nonblock-statement-body-position": "error",
      "@stylistic/js/object-curly-newline": "error",
      "@stylistic/js/object-curly-spacing": ["error", "always"],
      "@stylistic/js/one-var-declaration-per-line": "error",
      "@stylistic/js/operator-linebreak": "error",
      "@stylistic/js/quote-props": ["error", "as-needed"],
      "@stylistic/js/quotes": ["error", "double"],
      "@stylistic/js/rest-spread-spacing": "error",
      "@stylistic/js/semi-spacing": "error",
      "@stylistic/js/semi-style": "error",
      "@stylistic/js/semi": ["error", "always"],
      "@stylistic/js/space-before-blocks": "error",
      "@stylistic/js/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "@stylistic/js/space-in-parens": "error",
      "@stylistic/js/space-infix-ops": "error",
      "@stylistic/js/space-unary-ops": "error",
      "@stylistic/js/spaced-comment": "error",
      "@stylistic/js/switch-colon-spacing": "error",
      "@stylistic/js/template-curly-spacing": "error",
      "@stylistic/js/wrap-iife": ["error", "inside"],
      "@stylistic/js/wrap-regex": "warn",
      "@stylistic/js/yield-star-spacing": "error",
    },
  },
];
