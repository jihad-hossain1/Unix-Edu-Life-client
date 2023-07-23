module.exports = {
  env: { browser: true, es2023: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  // plugins: ["react"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": 0,
  },
};
