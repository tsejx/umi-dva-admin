import { Reducer } from 'redux';
import { Effect } from './connect';
import { MenuDataItem } from '@/typings';
import getMenuData from '@/utils/getMenuData';

export interface MenuModelState {
  menuData: MenuDataItem[];
  breadcrumbNameMap: object;
}

export interface MenuModelType {
  namespace: 'menu';
  state: MenuModelState;
  reducers: {
    setState: Reducer<MenuModelState>;
  };
  effects: {
    getMenuData: Effect;
  };
}

const MenuModel: MenuModelType = {
  namespace: 'menu',

  state: {
    menuData: [],
    breadcrumbNameMap: {},
  },

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  effects: {
    *getMenuData({ payload }, { put }) {
      const { routes } = payload;

      const menuData = getMenuData({ data: routes });

      yield put({
        type: 'setState',
        payload: {
          menuData,
        },
      });
    },
  },
};

export default MenuModel;
