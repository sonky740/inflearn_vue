<template>
  <div>
    <ul>
      <li v-for="item in ask" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAskList } from '../api';

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.ask = response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
</script>

<style scoped></style>
