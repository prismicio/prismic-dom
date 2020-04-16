var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');

var libraryName = 'PrismicDOM',
    fileName = 'prismic-dom',
    plugins = [],
    outputFile;

if (yargs.argv.p) {
  outputFile = fileName + '.min.js';
} else {
  outputFile = fileName + '.js';
}

var config = {
  target: 'node',
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
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
      "@root": path.resolve( __dirname, './src' )
    },
    extensions: ['.js']
  },
  mode: yargs.argv.p ? 'production' : 'development',
  plugins: plugins,
  optimization: { minimize: !!yargs.argv.p },
};

module.exports = config;
