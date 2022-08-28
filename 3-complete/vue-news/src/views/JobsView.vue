<template>
  <div>
    <ul>
      <li v-for="job in this.$store.state.jobs" :key="job.id">
        <a :href="job.url" target="_blank">{{ job.title }}</a>
        <small>{{ job.time_ago }} by {{ job.domain }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scoped></style>
