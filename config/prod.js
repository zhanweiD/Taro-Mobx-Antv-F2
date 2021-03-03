const path = require('path')
module.exports = {
  env: {
    NODE_ENV: '"production"',
    TARO_ENV: "weapp" | "swan" | "alipay" | "h5" | "rn" | "qq" | "jd",
  },
  defineConstants: {
  },
  mini: {
    compile: {
      exclude: [
        path.resolve(__dirname, '..', 'ec-canvas/echarts.js')
      ]
    },
    webpackChain(chain) {
      chain.merge({
       optimization: {
        splitChunks: {
         cacheGroups: {
          [DeviceEchartsChunkName]: {
           name: DeviceEchartsChunkName,
           priority: 50,
           test(module) {
            return /ec-canvas[\\/]echarts.js/.test(
             module.resource
            );
           },
          },
         },
        },
       },
      });
    },
    addChunkPages(pages, pagesNames) {
      // pages.set("package1/pages/bim/grow_chart/index", [DeviceEchartsChunkName]);
      pages.set("ec-canvas/echarts", [DeviceEchartsChunkName]);
    }
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
