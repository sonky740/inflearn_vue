<template>
  <li>
    <span class="item" :class="todoItemClass">
      <button type="button" @click="toggleItem">{{ todoItem.title }}</button>
    </span>
    <button type="button" @click="removeItem">delete</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Todo } from '../App.vue';

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  // computed는 꼭 반환 타입을 정해야함.
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.done ? 'complete' : null;
    },
  },
  methods: {
    removeItem() {
      this.$emit('remove', this.index);
    },
    toggleItem() {
      this.$emit('toggle', this.index, this.todoItem);
    },
  },
});
</script>

<style scoped>
.item button {
  border: none;
  background: transparent;
  color: inherit;
}

.complete button {
  text-decoration: line-through;
  color: #666;
  cursor: pointer;
}
</style>
