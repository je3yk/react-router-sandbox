/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-multiline-arrays").MultilineArrayOptions} MultilineConfig */
/** @typedef {import("prettier-plugin-organize-imports").Config} OrganizeImportsConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | MultilineConfig | SortImportsConfig | OrganizeImportsConfig } */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-organize-imports',
    'prettier-plugin-multiline-arrays',
  ],
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: false,
  singleAttributePerLine: true,
  proseWrap: 'always',
  experimentalTernaries: true,
  multilineArraysWrapThreshold: 2, // Wrap the array if it has 2 or more elements
  importOrder: [
    '^react$',
    '',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@app)(/.*)$',
    '',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'decorators-legacy',
  ],
  importOrderTypeScriptVersion: '5.2.2',
};

export default config;
