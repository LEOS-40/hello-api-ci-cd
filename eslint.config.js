import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // ← IMPORTANT : autorise require/module
      globals: {
        ...globals.node,      // ← process, console, module, require
      },
    },
  },

  {
    files: ["test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.jest,      // ← test, expect, describe, it
      },
    },
  },
];