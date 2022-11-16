import { createStore } from 'vuex';
import { counterModule } from './counter/index.js';
import state from './state';
import getters from './getters'
import mutations from './mutations.js';
import actions from './actions.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state,
  getters,
  mutations,
  actions,
});

export default store;
