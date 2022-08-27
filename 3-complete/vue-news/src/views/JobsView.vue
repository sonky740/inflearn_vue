<template>
  <div>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchJobsList } from '../api';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => {
        this.jobs = response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
</script>

<style scoped></style>
