import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView'; // HOC

import { store } from '../store';
import bus from '../utils/bus';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'), // HOC
      // router navigation guard
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            throw new Error(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            throw new Error(error);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            throw new Error(error);
          });
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
