<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
</script>

<style scoped></style>
