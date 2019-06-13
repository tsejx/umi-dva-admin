import { Reducer } from 'redux'
import { routerRedux } from 'dva/router'
import { Effect } from './connect'

export interface LoginModelState {
    status: undefined;
}

export interface LoginModelType {
    namespace: 'login';
    state: LoginModelState;
    reducers: {
        changeLoginStatus: Reducer<LoginModelState>
    },
    effects: {
        login: Effect;
        getCaptchae: Effect;
        logout: Effect;
    }
}

const LoginModel: LoginModelType = {
    namespace: 'login',

    state: {
        status: undefined
    },

    effects: {
        * login({ payload }, { call, put }) {
            yield put(routerRedux.replace({
                pathname: '/dashboard/analysis'
            }))
        },
        * getCaptchae({ payload }, { call, put }) {

        },
        * logout({ payload }, { call, put }) {
            yield put(routerRedux.replace({
                pathname: '/main/login'
            }))
        }
    },

    reducers: {
        changeLoginStatus(state, { payload }) {
            return {
                ...state,
                status: payload.status,
                type: payload.type
            }
        }
    }
}

export default LoginModel