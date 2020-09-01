const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "./" : "/",
  productionSourceMap: isProd ? false : true,
  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      );
    }
  },
  devServer: {
    open: true,
    port: 8686
  }
};
