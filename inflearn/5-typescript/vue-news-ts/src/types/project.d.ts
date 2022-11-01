// src/types/project.d.ts
import Vue from 'vue';
import { MyStore } from '@/store/types';

// Vue2 기준.
// NOTE: node_modules/vuex/types/vue.d.ts 파일을 삭제 해줘야 아래 타입이 정상 추론됨.
declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
