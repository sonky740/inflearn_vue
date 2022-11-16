<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-if="userIsAuthenticated">Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    ...mapGetters('numbers', ['testAuth']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<style lang="scss" scoped></style>
