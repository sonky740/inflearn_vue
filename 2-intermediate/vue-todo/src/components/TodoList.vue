<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, i) in propsdata"
        :key="todoItem.item"
        class="shadow"
      >
        <button
          type="button"
          class="checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem, i)"
        >
          <i class="fas fa-check"></i>
        </button>
        <span :class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <button
          type="button"
          @click="removeTodo(todoItem, i)"
          class="removeBtn"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem) {
      this.$emit('removeItem', todoItem);
    },
    toggleComplete(todoItem, i) {
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

/* transition */
.list-enter-active {
  transition: all .3s;
}
.list-leave-active {
  transition: all .2s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
