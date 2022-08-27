const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }

    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      item: todoItem,
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, todoItem) {
    localStorage.removeItem(todoItem.item);
    state.todoItems = state.todoItems.filter(
      (todoItems) => todoItems.item !== todoItem.item
    );
  },
  toggleOneItem(state, { todoItem, i }) {
    state.todoItems[i].completed = !state.todoItems[i].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default { state, getters, mutations };
