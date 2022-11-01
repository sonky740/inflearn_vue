<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button type="button" class="btn btn-primary" @click="$router.push('/')">
      Home 이동
    </button>
    <h2>Store</h2>
    <p>구조분해 counter: {{ counter }}</p>
    <p>counter: {{ store.counter }}</p>
    <p>doubleCount: {{ store.doubleCount }}</p>
    <button type="button" @click="store.increment()">Increase</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia'; // 반응성이 끊기는걸 막기 위함.

const route = useRoute();
console.log('route.path: ', route.path);

const store = useCounterStore();
const { counter } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
