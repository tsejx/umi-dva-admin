// ref: https://umijs.org/config/
export default {
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        title: 'umi-dva-admin',
        antd: true,
        dva: {
          hmr: true,
          immer: true,
          dynamicImport: true,
        },
        routes: {
          exclude: [],
        },
        dll: false,
        hardSource: false,
        ignoreMomentLocale: false,
      }]
    ],
    publicPath: '/'
  }
  