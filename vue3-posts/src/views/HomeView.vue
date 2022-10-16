<template>
  <div>
    <h2>Hove View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button type="button" class="btn btn-primary" @click="goAboutPage">
      About 이동
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAboutPage = () => {
  router.push({
    name: 'About',
  });
};
</script>

<style lang="scss" scoped></style>
