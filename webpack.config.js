var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');
 
var libraryName = 'PrismicDOM',
    fileName = 'prismic-dom',
    plugins = [],
    outputFile;
 
if (yargs.argv.p) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = fileName + '.min.js';
} else {
  outputFile = fileName + '.js';
}
 
var config = {
  entry: [
    __dirname + '/src/index.ts'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          emitErrors: true,
          failOnHint: true
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
    alias:{
      "@root": path.resolve( __dirname, './src' ),
      "@utils": path.resolve( __dirname, './src/utils' )
    },
    extensions: ['.ts']
  },
  plugins: plugins
};
 
module.exports = config;