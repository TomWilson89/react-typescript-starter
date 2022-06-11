const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main-bundle-[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
  },
  plugins: [new CleanWebpackPlugin()],
};
