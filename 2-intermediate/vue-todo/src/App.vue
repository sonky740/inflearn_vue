<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList
      :propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter @clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {
        completed: false,
        item: todoItem,
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem) {
      localStorage.removeItem(todoItem.item);
      this.todoItems = this.todoItems.filter(
        (todoItems) => todoItems.item !== todoItem.item
      );
    },
    toggleOneItem(todoItem, i) {
      this.todoItems[i].completed = !this.todoItems[i].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
