<template>
  <div>
    <div>{{ str }}</div>
    <app-header v-bind:str="str" v-on:renew="renewStr" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      str: 'Header',
    };
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = 'hi';
    },
  },
};
</script>

<style scoped></style>
