import * as api from './service';

export default {
  namespace: 'home',
  state: {
    name: '测试用'
  },

  effects: {
    * getUserName(_, { call, put }) {
      const { status, data } = yield call(api.getUserName, {});
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
