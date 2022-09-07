// import Chart from 'chart.js/auto';
import Chart from 'chart.js/auto';

declare module 'vue/types/vue' {
  interface Vue {
    $_Chart: Chart;
  }
}
