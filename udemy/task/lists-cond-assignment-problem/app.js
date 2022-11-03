const app = Vue.createApp({
  data() {
    return {
      items: [],
      inputItem: '',
      isListVisible: true,
    };
  },
  methods: {
    addItem() {
      if (this.inputItem.trim() === '') return;
      this.items.push(this.inputItem);
      this.inputItem = '';
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
  },
});

app.mount('#assignment');
