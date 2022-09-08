<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input type="text" id="todo-input" :value="item" @input="handlerInput" />
    <button type="button" @click="addTodo">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { VueEvent } from '@/types';

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    handlerInput(e: VueEvent.Input<HTMLInputElement>) {
      const eventTarget = e.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
