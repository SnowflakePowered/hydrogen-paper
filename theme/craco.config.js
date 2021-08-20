const CracoAlias = require("craco-alias");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack: {
      plugins: {
          // use our own ForkTsCheckerWebpackPlugin
          add: [new ForkTsCheckerWebpackPlugin({
            typescript: {
              diagnosticOptions: {
                semantic: true,
                syntactic: true,
              },
              mode: "write-references",
            },
            issue: {
              exclude: [
                { file: '**/*.test.tsx' },
                { file: '**/*.stories.tsx' }

              ]
            },
          })],
          remove: ["ForkTsCheckerWebpackPlugin"], // remove forktschecker
      },
    },
    plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      }
    },
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => { 
          webpackConfig.context = __dirname;
          // console.log(webpackConfig)
          return webpackConfig; 
        },
      }
    }
  ]
};