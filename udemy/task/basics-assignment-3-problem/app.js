const app = Vue.createApp({
  data() {
    return {
      count: 0,
      message: '',
      interval: null,
    };
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    },
  },
  watch: {
    count(newVal) {
      if (newVal > 37) {
        this.message = 'Too much!';
      } else {
        this.message = 'Not there yet';
      }

      if (this.interval) {
        clearTimeout(this.interval);
      }
      this.interval = setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
