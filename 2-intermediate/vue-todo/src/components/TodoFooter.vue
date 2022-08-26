<template>
  <div class="clearAllContainer">
    <button type="button" class="clearAllBtn" @click="clearTodo">
      Clear All
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAllItems');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #e20303;
}
</style>
