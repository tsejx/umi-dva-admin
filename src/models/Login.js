import { routerRedux } from 'dva/router'

export default {
    namespace: 'Login',

    state: {
        status: undefined
    },

    effects: {
        *login({payload}, {call, put}) {
            // const response = yield call(fakeAccountLogin, payload)
            // yield put({
            //     type: 'changeLoginStatus',
            //     payload: response
            // })
            // if (Response.state === 'ok') {

            // }
            yield put(routerRedux.replace({
                pathname: '/dashboard/analysis'
            }))
        },
        *getCaptchae({payload}, {call, put}) {

        },
        *logout({payload}, {call, put}) {
            yield put(routerRedux.replace({
                pathname: '/main/login'
            }))
        }
    },

    reducer: {
        changeLoginStatus(state, { payload }) {
            return {
                ...state,
                status: payload.status,
                type: payload.type
            }
        }
    }
}