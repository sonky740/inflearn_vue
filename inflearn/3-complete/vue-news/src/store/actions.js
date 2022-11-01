import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index';

export default {
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  },
  async FETCH_USER(context, name) {
    const response = await fetchUserInfo(name);
    context.commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM(context, item) {
    const response = await fetchItemInfo(item);
    context.commit('SET_ITEM', response.data);
    return response;
  },
};
