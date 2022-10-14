<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button type="button" class="btn btn-primary" @click="$router.push('/')">
      Home 이동
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.path: ', route.path);
</script>

<style lang="scss" scoped></style>
