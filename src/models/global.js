import {
     routerRedux
} from 'dva/router'

export default {
    namespace: 'global',
    state: {

    },
    reducers: {
        setState(state, {payload}){
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {

    },
    subscriptions: {

    }
}