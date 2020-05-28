import * as orderApi from './service';

export default {
  namespace: 'order',
  state: {
    name: '测试数据'
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(orderApi.demo, {});
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            topData: data,
          }
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
