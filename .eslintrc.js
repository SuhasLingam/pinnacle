module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
  },
};
