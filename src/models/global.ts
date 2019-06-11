import { Subscription } from 'dva';

export interface GlobalModelState {
    collapsed: boolean;
}

export interface GlobalModelType {
    namespace: 'global';
    state: GlobalModelState;
    effects: {

    };
    erducers: {

    };
    subscriptions: { setup: Subscription };
}

const GlobalModel = {
    namespace: 'global',

    state: {
        collapsed: true,
        notices: [],
    },

    effects: {

    },

    reducers: {
        onSideMenuCollapsed(state = { collapsed: true }, { payload }) {
            return {
                ...state,
                collapsed: payload
            }
        },
    },

    subscriptions: {
        setup({ history }) {
            return history.listen(({ pathname, search }) => {

            })
        }
    }
}

export default GlobalModel;