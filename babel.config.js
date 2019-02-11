module.exports = {
  presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-export-default-from', 'emotion', 'preval']
};
