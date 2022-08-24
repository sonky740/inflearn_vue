<template>
  <div>
    <ul>
      <li v-for="(item, i) in todoItems" v-bind:key="item" class="shadow">
        {{ item }}
        <button
          type="button"
          v-on:click="removeTodo(item, i)"
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
  data: function () {
    return {
      todoItems: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo: function (item) {
      localStorage.removeItem(item);
      // this.todoItems.splice(i, 1);
      this.todoItems = this.todoItems.filter((items) => items !== item);
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
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
}
</style>
