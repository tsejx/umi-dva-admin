import router from './router.config'

const path = require('path')

const resolve = (relativePath) => path.resolve(__dirname, relativePath)

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    title: 'umi-dva-admin',
    antd: true,
    dva: true,
    dynamicImport: true,
    dll: false,
    hardSource: false,
    locale: {
      enable: true,
      default: 'zh-CN',
      baseNavigator: true
    },
    // routes: {
    //   exclude: [
    //     /components/,
    //   ],
    // },
  }]
]

// ref: https://umijs.org/config/
export default {
  plugins,
  routes: router,
  alias: {
    '@': resolve('./src'),
    // 'components': resolve('./src/components')
  }
}
