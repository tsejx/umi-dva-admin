import router from './router.config';
import slash from 'slash2';

const path = require('path');

const resolve = relativePath => path.resolve(__dirname, relativePath);

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      title: 'umi-dva-admin',
      dva: {
        hmr: true,
      },
      antd: true,
      // routes: {
      //   exclude: [],
      //   update: () => {}
      // },
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
      library: 'react',
      dynamicImport: true,
      // dll: {
      //   include: '',
      //   exclude: ''
      // },
      hardSource: false,
      // pwa: {},
      // hd: true,
      // fastClick: true,
      // routes: {
      //   exclude: [
      //     /components/,
      //   ],
      // },
    },
  ],
];

// ref: https://umijs.org/config/
export default {
  plugins,
  routes: router,
  treeShaking: true,
  alias: {
    '@': resolve('./src'),
    components: resolve('./src/components'),
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      localIdentName: string,
      localName: string,
      options: object
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  ignoreMomentLocale: true,
};
