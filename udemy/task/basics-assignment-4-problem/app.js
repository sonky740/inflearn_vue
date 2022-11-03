const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      isVisible: true,
      inputBackgroundColor: '',
    };
  },
  computed: {
    pClass() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    togglePVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
