import { routerRedux } from 'dva/router';

export default {

  namespace: 'user',

  state: { name: '测试', id: 1 },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload });
      yield put(routerRedux.push('/products'));
    },
  },

  reducers: {
    save(state, action) {
      return action.payload;
    },
  },

};
