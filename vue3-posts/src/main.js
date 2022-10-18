import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import person from '@/plugins/person';
import globalDirectives from './plugins/global-directives';
// import dayjs from '@/plugins/dayjs';
// import focus from '@/directive/focus'; // 커스텀 디렉티브
// import globalComponents from '@/plugins/global-components'; // unplugin-vue-components 사용하면 안써도됨.

const app = createApp(App);
// app.use(globalComponents);
// app.directive('focus', focus);
app.use(globalDirectives);
app.use(person, { name: '손기연' });
// app.use(dayjs);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE:', import.meta.env.MODE);
// console.log('BASE_URL:', import.meta.env.BASE_URL);
// console.log('PROD:', import.meta.env.PROD);
// console.log('DEV:', import.meta.env.DEV);
// VITE를 붙여야 환경변수를 사용할 수 있다.
// envPrefix로 변경할 수 있다.
// console.log('VITE_APP_API_URL:', import.meta.env.VITE_APP_API_URL);
