import { Reducer } from 'redux';
import { Subscription } from 'dva';
// import { Effect } from './connect';

export interface GlobalModelState {
  collapsed: boolean;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    onSideMenuCollapsed: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
    // notices: [],
  },

  effects: {},

  reducers: {
    onSideMenuCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname, search }) => {});
    },
  },
};

export default GlobalModel;
