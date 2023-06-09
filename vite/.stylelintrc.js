module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: [],
  ignoreFiles: ['**/node_modules/**', '**/.nuxt/**', '**/dist/**'],
  rules: {
    'string-quotes': 'single',
    'block-no-empty': null,
    'number-leading-zero': null,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    indentation: 2,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': null,
    'shorthand-property-no-redundant-values': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'property-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'selector-pseudo-class-no-unknown': null,
  },
}
