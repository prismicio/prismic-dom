const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'tests-entry'),
  output: {
    path: path.resolve(__dirname, '..', 'test-build'),
    filename: 'test-bundle.js'
  },
  target: 'node',
};

module.exports = config;
