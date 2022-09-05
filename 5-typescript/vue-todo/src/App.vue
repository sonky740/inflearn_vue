<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <form @submit.prevent="addTodoItem">
        <TodoInput
          :item="todoText"
          @input="updateTodoText"
          @add="addTodoItem"
        ></TodoInput>
      </form>
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, i) in todoItems"
            :key="i"
            :index="i"
            :todoItem="todoItem"
            @remove="removeTodoItem"
            @toggle="doneTodoItem"
          ></TodoListItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

export interface Todo {
  title: string;
  done: boolean;
}

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch(): Todo[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  components: {
    TodoInput,
    TodoListItem,
  },
  data() {
    return {
      todoText: '',
      todoItems: [] as Todo[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        done: false,
      };
      this.todoItems.push(todo);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = '';
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch().sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    },
    removeTodoItem(index: number) {
      this.todoItems = this.todoItems.filter((_: Todo, i: number) => {
        return i !== index;
      });
      storage.save(this.todoItems);
    },
    doneTodoItem(index: number, todoItem: Todo) {
      this.todoItems[index].done = !todoItem.done;
      storage.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
