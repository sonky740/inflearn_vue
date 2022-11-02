const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(newVal) {
    //   if (newVal === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = newVal + ' ' + this.lastName;
    //   }
    // },
    // lastName(newVal) {
    //   if (newVal === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + newVal;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Khan';
    },
  },
});

app.mount('#events');
