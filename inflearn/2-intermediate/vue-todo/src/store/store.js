import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp';

Vue.use(Vuex); // global로 Vuex를 사용하겠다.

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
