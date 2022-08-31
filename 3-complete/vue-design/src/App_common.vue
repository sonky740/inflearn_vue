<template>
  <div>
    <app-header :title="title"></app-header>
    <app-content :items="items" @renew="doubleHandler"></app-content>
  </div>
</template>

<script>
import AppContent from './components/common/AppContent.vue';
import AppHeader from './components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      title: 'Common Approach',
      items: [10, 20, 30],
    };
  },
  computed: {
    doubleItems() {
      return this.items.map((item) => {
        return item * 2;
      });
    },
  },
  methods: {
    doubleHandler() {
      this.items = this.doubleItems;
    },
  },
};
</script>

<style></style>
