module.exports = {
  extends: 'eslint-config-umi',
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx'] } },
  },
};
