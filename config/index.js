
const path = require('path')

const config = {
  projectName: 'taro',
  date: '2021-2-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [
    // '@tarojs/plugin-sass', // 使用 Sass
    // '@tarojs/plugin-less', // 使用 Less
    '@tarojs/plugin-stylus', // 使用 Stylus
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  mini: {
    prerender: {
      match: 'pages/**/**', // 所有以 `pages/shop/` 开头的页面都参与 prerender
      // include: ['pages/any/way/index'], // `pages/any/way/index` 也会参与 prerender
      // exclude: ['pages/shop/index/index'] // `pages/shop/index/index` 不用参与 prerender
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
