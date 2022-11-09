<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :item="resource"
      :key="resource.id"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  inject: {
    resources: {
      default: [],
    },
  },
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
