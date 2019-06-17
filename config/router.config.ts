/*
 * @Author: tsejx
 * @Date: 2019-01-06 21:25:33
 * @Last Modified by: tsejx
 * @Last Modified time: 2019-05-04 16:51:01
 */

export default [
  // SignPage
  {
    path: '/main',
    component: '../layouts/LoginLayout',
    routes: [
      { path: '/main', redirect: '/main/login' },
      { path: '/main/login', component: './Main/Login' },
    ],
  },
  // HomePage
  {
    path: '/',
    component: '../layouts/BasicLayout',
    authority: ['adimint', 'user'],
    routes: [
      // Dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Business/Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Business/Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Business/Dashboard/Workplace',
          },
        ],
      },
      // ListPage
      {
        path: '/list',
        name: 'list',
        icon: 'table',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './Business/List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './Business/List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './Business/List/CardList',
          },
          {
            path: '/list/search-list',
            name: 'searchlist',
            component: './Business/List/SearchList',
          },
        ],
      },
      // Form
      {
        path: '/form',
        name: 'form',
        icon: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Business/Form/BasicForm',
          },
          // {
          //     path: '/form/step-form',
          //     name: 'stepform',
          //     component: './Form/StepForm',
          // },
          // {
          //     path: '/form/advanced-form',
          //     name: 'advancedform',
          //     component: './Form/AdvancedForm'
          // }
        ],
      },
      // Profile
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // {
          //     path: '/profile/basic',
          //     name: 'basic',
          //     component: './Profile/Basic'
          // },
          // {
          //     path: 'profile/advanced',
          //     name: 'advanced',
          //     component: './Profile/Advanced'
          // }
        ],
      },
      // Acount
      {
        path: '/account',
        name: 'account',
        icon: 'user',
        routes: [
          // {
          //     path: '/account/center',
          //     name: 'center',
          //     component: './Account/Center/Center',
          //     routes: [
          //         {
          //             path: '/account/center',
          //             redirect: '/account/center/articles'
          //         },
          //         {
          //             path: '/account/center/articles',
          //             component: './Account/Center/Articles'
          //         },
          //         {
          //             path: '/account/center/applications',
          //             component: './Account/Center/Applications'
          //         },
          //         {
          //             path: '/account/center/projects',
          //             component: './Account/Center/Projects'
          //         }
          //     ]
          // }
        ],
      },
    ],
  },
];
