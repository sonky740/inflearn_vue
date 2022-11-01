const app = Vue.createApp({
  data() {
    return {
      name: 'Sonky',
      age: 31,
      imageUrl:
        'http://know.nifos.go.kr/webzine/202011/img/sub/m1/img_03_02.jpg',
    };
  },
  computed: {
    calculateAge() {
      return this.age + 5;
    },
  },
  methods: {
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
