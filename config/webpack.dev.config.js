const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    performance: { hints: false },
    node: {
      fs: "empty"
   },
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
    },
    watch:false,
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Basic Template',
            myPageHeader: 'Basic Template',
            filename: 'index.html',
            template: './src/views/index.html',
            publicPath: ''
        })
   ],
   
   module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'img/[hash]-[name].[ext]'
            } 
        }]
        }
    ]
  }
}