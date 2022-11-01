import { VueConstructor } from 'vue';

export type MyChartRefs<T> = VueConstructor<Vue & { $refs: T }>;
