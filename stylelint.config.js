// kebab-case | vant class
const selectorClassPattern =
  /^(([a-z]+[a-z0-9]*(-[a-z0-9]+)*)|(van-[-0-9a-z_]+))$/

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include'],
      },
    ],
    'selector-class-pattern': selectorClassPattern,
  },
}
