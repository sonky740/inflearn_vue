import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 1
  // render(createdElement) {
  //   return createdElement(App);
  // }
  // 2
  // render(h) {
  //   return h(App);
  // }
}).$mount('#app');
