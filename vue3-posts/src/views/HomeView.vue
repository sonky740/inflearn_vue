<template>
  <div>
    <h2>Hove View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button type="button" class="btn btn-primary" @click="goAboutPage">
      About 이동
    </button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();

const goAboutPage = () => {
  router.push({
    name: 'About',
  });
};

const items = ref(['사과', '배', '딸기', '포도', '바나나', '수박']);
</script>

<style lang="scss" scoped></style>
