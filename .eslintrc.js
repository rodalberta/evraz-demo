module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@indielayer/eslint-config-vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
