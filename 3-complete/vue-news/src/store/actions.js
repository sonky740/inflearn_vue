import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index';

export default {
  FETCH_LIST(context, pageName) {
    return fetchList(pageName)
      .then((response) => {
        context.commit('SET_LIST', response.data);
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_USER(context, name) {
    return fetchUserInfo(name)
      .then((response) => {
        context.commit('SET_USER', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  FETCH_ITEM(context, item) {
    return fetchItemInfo(item)
      .then((response) => {
        context.commit('SET_ITEM', response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
