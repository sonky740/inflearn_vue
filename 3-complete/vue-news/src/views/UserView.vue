<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>crated: {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$router.currentRoute.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
