module.exports = {
    // 关闭线上源码
    productionSourceMap: true,
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
          .use('babel-loader')
          .loader('babel-loader')
          .end()
          .use('vue-svg-loader')
          .loader('vue-svg-loader');
      },
    devServer: {
        disableHostCheck: true,
        open: true,
        // host: 'localhost',
        port: 8001,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': { //8.134.75.109
                target: 'http://localhost:8088',
                changeOrigin: true,
                pathRewrite:{
                    '^/api': '/'
                },
            },
        },

    },
}