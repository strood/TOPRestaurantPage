const path = require('path');

// Added in output management, HtmlWebpackPlugin section.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Added to cleanup dist folder
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

// Used to add vendor-specific styles to Sass files, config w PostCSS-loader
const autoprefixer = require('autoprefixer');

module.exports = {
  // swap to dev mode if developing
  // mode: 'development',
  mode: 'production',
  entry: {
    app: './src/index.js',
    // print: './src/print.js', No second file present yet, add more here
  },
  devtool: 'inline-source-map',
  // Below line tells webpack-dev-server to server files from /dist directory on
  //  localhost:8080(or port set in servr.js)
  //  run using webpack-dev-server --open or script in package.json $ npm run start
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tribe | Eat a little. Drink a little. Flirt a little. Tell your most awesome stories.',
      favicon: "./src/img/1599847804.ico",
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
        use: [{
            // Creates `style` nodes from JS strings
            loader: 'style-loader',
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer(),
                ],
              },
            },
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules'],
              },
              // Prefer Dart Sass
              implementation: require('sass'),

              // See https://github.com/webpack-contrib/sass-loader/issues/804
              webpackImporter: false,
            },
          }

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
