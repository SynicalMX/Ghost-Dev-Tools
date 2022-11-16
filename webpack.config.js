/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');

class AssetToBookmarkletPlugin {
  pluginName = 'AssetToBookmarkletPlugin';
  apply(compiler) {
      compiler.hooks.thisCompilation.tap(this.pluginName, (compilation) => {
          compilation.hooks.processAssets.tap({
              name: this.pluginName,
              stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
          }, (assets) => {
              // Emit a new .bookmarklet
              for (const assetName in assets) {
                  const asset = assets[assetName];
                  const content = 'javascript:' + encodeURIComponent('(function(){' + asset.source() + '})()');
                  compilation.emitAsset(assetName.slice(assetName.indexOf()), new webpack.sources.RawSource(content))
              }
          });
      });
  }
}

const config = {
  entry: './src/main.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'ghost-dev-tools.js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
      new AssetToBookmarkletPlugin()
  ]
};

module.exports = config;