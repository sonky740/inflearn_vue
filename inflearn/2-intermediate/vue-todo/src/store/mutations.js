const addOneItem = (state, todoItem) => {
  const obj = {
    completed: false,
    item: todoItem,
  };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, todoItem) => {
  localStorage.removeItem(todoItem.item);
  state.todoItems = state.todoItems.filter(
    (todoItems) => todoItems.item !== todoItem.item
  );
};
const toggleOneItem = (state, { todoItem, i }) => {
  state.todoItems[i].completed = !state.todoItems[i].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
