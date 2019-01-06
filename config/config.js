import router from './router.config.js'

const path = require('path')
const resolve = (relativePath) => path.resolve(__dirname, relativePath)

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: {
      hmr: true,
      immer: true
    },
    dynamicImport: true,
    title: 'umi-dva-admin',
    dll: false,
    hardSource: false,
    routes: {
      exclude: [
        /components/,
      ],
    },
  }]
]

// ref: https://umijs.org/config/
export default {
  plugins
}
