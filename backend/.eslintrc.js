module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [],
  extends: [
    "eslint:recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // You can do more rule customizations here...
  },
};
