const path = require('path');

// Added in output management, HtmlWebpackPlugin section.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Added to cleanup dist folder
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  // Added only for dev! dont need below line:
  mode: 'development',
  entry: {
    app: './src/index.js',
    // print: './src/print.js', No second file present yet, add more here
  },
  devtool: 'inline-source-map',
  // Below line tells webpack-dev-server to server files from /dist directory on
  //  localhost:8080
  //  run using webpack-dev-server --open or script in package.json $ npm run start
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tribe | eat a little, drink a little, flirt a little, tell awesome stories.',
    }),
    // Added for second plugin, the option Tells CleanWebpackPlugin that we don't
    // want to remove the index.html file after the incremental build triggered by watch
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // File loader to include images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        // File loader to include fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
