import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '../pages/TeamsList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import UsersList from '../pages/UsersList.vue';
import TeamsFooter from '../pages/TeamsFooter.vue';
import UsersFooter from '../pages/UsersFooter.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        }, // props:true => :teamId를 props로 전달
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
