import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit('SET_JOBS', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit('SET_ASK', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_USER(context, name) {
    fetchUserInfo(name)
      .then((response) => {
        context.commit('SET_USER', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_ITEM(context, item) {
    fetchItemInfo(item)
      .then((response) => {
        context.commit('SET_ITEM', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
