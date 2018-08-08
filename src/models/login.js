import { routerRedux } from 'dva/router';
import { query } from '../services/user';

export default {

  namespace: 'user',

  state: { name: '测试', id: 1 },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(query);
      const { users } = response.data;
      console.log('Mock返回:', JSON.stringify(users))
      yield put({ type: 'save', payload });
      if (users && users.length > 0) {
        yield put(routerRedux.push('/products'));
      }
    },
  },

  reducers: {
    save(state, action) {
      return action.payload;
    },
  },

};
