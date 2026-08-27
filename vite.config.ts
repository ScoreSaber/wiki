import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: [".next/**", ".source/**", "content/docs/**", "out/**"],
  },
  lint: {
    categories: {
      correctness: "error",
    },
    env: {
      browser: true,
      builtin: true,
    },
    ignorePatterns: [".next/**", ".source/**", "out/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "typescript/no-explicit-any": "error",
      "typescript/no-non-null-assertion": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
  },
  staged: {
    "*.{css,js,json,jsonc,jsx,md,mdx,ts,tsx,yaml,yml}": "vp fmt --write",
    "*.{js,jsx,ts,tsx}": "vp lint --fix",
  },
  run: {
    tasks: {
      verify: {
        command: ["vp run typecheck", "vp check", "vp test", "vp run lint:md", "vp run build"],
      },
    },
  },
  test: {
    passWithNoTests: true,
  },
});
