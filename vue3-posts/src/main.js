import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE:', import.meta.env.MODE);
// console.log('BASE_URL:', import.meta.env.BASE_URL);
// console.log('PROD:', import.meta.env.PROD);
// console.log('DEV:', import.meta.env.DEV);
// VITE를 붙여야 환경변수를 사용할 수 있다.
// envPrefix로 변경할 수 있다.
// console.log('VITE_APP_API_URL:', import.meta.env.VITE_APP_API_URL);
