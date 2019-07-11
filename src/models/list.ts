
import { Reducer } from 'redux';
// import { routerRedux } from 'dva/router';
import { Effect } from '@/models/connect';
import { createIterator } from '@/services/list'
import { TableListData } from '@/pages/Business/List/TableList';

export interface ListModelState {
    list: []
}

export interface ListModelType {
    namespace: 'list';
    state: ListModelState;
    reducers: {
        queryList: Reducer<ListModelState>;
    };
    effects: {
        createIterator: Effect;
    };
}

const ListModel: ListModelType = {
    namespace: 'list',

    state: {
        list: []
    },

    effects: {
        * createIterator({ payload }, { call, put }) {
            const data = yield call(createIterator, payload);
            yield put({
                type: 'queryList',
                payload: data.list.map((item: TableListData) => { item.key = item.id; return item }),
            })
        },
    },
    reducers: {
        queryList(state, action) {
            return {
                ...state,
                list: action.payload
            }
        }
    },
};

export default ListModel;
