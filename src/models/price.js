import { query } from '../services/app';
export default {
  namespace: 'price',
  state: {
    ticker: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  },
  effects: {
    *fetch({ }, { call, put }) {  // eslint-disable-line
      const response = yield call(query);
      // console.log('Mock返回:', JSON.stringify(response))
      yield put({ type: 'save', payload: response });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ticker: payload };
    },
  },
};