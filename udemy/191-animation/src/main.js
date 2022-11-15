import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import router from './router';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

// 첫 화면에서 route animation을 없애기 위함. => 라우터가 완전히 설정되고나서 실행되도록.
router.isReady().then(() => {
  app.mount('#app');
});
