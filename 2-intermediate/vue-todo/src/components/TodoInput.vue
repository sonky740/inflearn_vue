<template>
  <form class="inputBox shadow" v-on:submit.prevent="addTodo">
    <input type="text" v-model="newTodoItem" />
    <button class="addBtn">
      <i class="fas fa-plus"></i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addBtn {
  float: right;
  width: 3rem;
  height: 100%;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border: none;
  border-radius: 0 5px 5px 0;
  color: #fff;
  vertical-align: middle;
}
</style>
