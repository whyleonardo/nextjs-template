/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig } */

const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson"
  ],
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  importOrder: [
    "/^react/",
    "/^next/",
    "/^@next/",
    "^@/components/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^@/(.*)$",
    "^@(.*)$",
    "^(?!next|react)[a-z]",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}

module.exports = config
