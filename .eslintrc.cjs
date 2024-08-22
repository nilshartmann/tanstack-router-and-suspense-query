module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "__generated__", "routeTree.gen.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "unused-imports", "simple-import-sort", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  },
};
