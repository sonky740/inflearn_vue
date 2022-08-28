<template>
  <div>
    <ul>
      <li v-for="item in fetchedAsk" :key="item.id">
        <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
        <small>
          {{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style scoped></style>
