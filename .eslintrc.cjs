/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "indent": [ "error", 2, {
      SwitchCase: 1,
      VariableDeclarator: "first",
      FunctionDeclaration: { parameters: "first" },
      FunctionExpression: { parameters: "first" },
      CallExpression: { arguments: "first" },
      ArrayExpression: 1,
      ObjectExpression: 1,
    }],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "semi-spacing": [ "error", {
      before: false,
      after: true,
    }],
    "arrow-body-style": [ "error", "as-needed" ],
    "brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
    "block-spacing": [ "error", "always" ],
    "space-before-blocks": [ "error", "always" ],
    "space-infix-ops": "error",
    "keyword-spacing": [ "error", {
      before: true,
      after: true,
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        switch: { after: false },
        with: { after: false },
        catch: { after: false },
      },
    }],
    "quote-props": [ "error", "consistent-as-needed" ],
    "comma-dangle": [ "error", "always-multiline" ],
    "linebreak-style": [ "error", "unix" ],
    "eqeqeq": [ "error", "always", { null: "ignore" } ],
  },
};
