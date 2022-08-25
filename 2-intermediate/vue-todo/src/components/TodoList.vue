<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, i) in propsdata"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <button
          type="button"
          class="checkBtn"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, i)"
        >
          <i class="fas fa-check"></i>
        </button>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <button
          type="button"
          v-on:click="removeTodo(todoItem, i)"
          class="removeBtn"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function (todoItem) {
      this.$emit('removeItem', todoItem);
    },
    toggleComplete: function (todoItem, i) {
      this.$emit('toggleItem', todoItem, i);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}

.removeBtn {
  border: none;
  background: transparent;
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  border: none;
  background: transparent;
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  opacity: 0.4;
}
</style>
