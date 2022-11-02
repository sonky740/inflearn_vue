const app = Vue.createApp({
  data() {
    return {
      alert: 'Show Alert',
      keydownText: '',
      enterText: '',
    };
  },
  methods: {
    showAlert() {
      alert(this.alert);
    },
    keydownHandler(event) {
      this.keydownText = event.target.value;
    },
    enterHandler(event) {
      this.enterText = event.target.value;
    },
  },
});

app.mount('#assignment');
