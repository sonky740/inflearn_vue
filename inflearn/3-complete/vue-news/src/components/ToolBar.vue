<template>
  <header class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 8px;
  background: #42b883;
  color: #fff;
}

.header a {
  position: relative;
  color: inherit;
} 

.header a + a {
  margin-left: 20px;
}

.header .router-link-exact-active {
  color: #354953;
}
</style>
