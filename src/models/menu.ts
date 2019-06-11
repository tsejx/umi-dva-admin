import memoizeOne from 'memoize-one'
import isEqual from 'lodash/isEqual'
import { formatMessage } from 'umi/locale';

import { MenuDataItem } from '../typings'

// Conversion routes to menu
function formatter({ data, parentAuthority, parentName }) {
    return data
        .filter(item => item && item.name && item.path)
        .map((item = { path: '' }) => {

            if (!item.name) {
                return item;
            }

            // if (!item.name || !item.path) {
            //     return null;
            // }

            // const { name } = item;

            let locale = 'menu';

            // if (parentName) {
            //     locale = `${parentName}.${item.name}`;
            // } else {
            //     locale = `menu.${item.name}`;
            // }

            // const localName = item.menu

            const result: MenuDataItem = {
                ...item,
                // name: formatMessage({
                //     id: locale,
                //     defaultMessage: item.name
                // }),
                // locale,
                // authority: item.authority || parentAuthority,
                routes: null,
            };

            if (item.routes) {
                const children = formatter({
                    ...item,
                    data: item.routes,
                    authority: item.authority,
                    parentName: locale
                });
                // Reduce memory usage
                result.children = children;
            }
            // delete result.routes;
            return result;
        })
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

/**
 * get SubMenu or Item
 */
const getSubMenu = item => {
    // doc: add hideChildrenInMenu
    if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
        return {
            ...item,
            children: filterMenuData(item.children), // eslint-disable-line
        };
    }
    return item;
};

/**
 * filter menuData
 */
const filterMenuData = menuData => {

    // console.log('filterMenuData', menuData)

    if (!menuData) {
        return [];
    }
    return menuData
        .filter(item => item.name && !item.hideInMenu)
    // .map(item => check(item.authority, getSubMenu(item)))
    // .filter(item => item);
};

export default {
    namespace: 'menu',

    state: {
        menuData: [],
        breadcrumbNameMap: {}
    },

    reducers: {
        setState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    },

    effects: {
        * getMenuData({ payload }, { put }) {

            const { routes } = payload

            console.log('routes', routes)

            const menuData = memoizeOneFormatter({ data: routes })

            // console.log('menuData', menuData)

            yield put({
                type: 'setState',
                payload: {
                    menuData
                }
            })
        }
    },

}