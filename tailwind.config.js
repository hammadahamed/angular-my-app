module.exports = {
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  },
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
