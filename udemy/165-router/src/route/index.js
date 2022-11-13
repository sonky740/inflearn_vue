import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '../components/teams/TeamsList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import UsersList from '../components/users/UsersList.vue';
import NotFound from '../components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: '/teams/:teamId', component: TeamMembers, props: true }, // props:true => :teamId를 props로 전달
      ],
    },
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

export default router;
