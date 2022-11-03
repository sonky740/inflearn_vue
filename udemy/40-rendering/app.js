const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: '' };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue.trim() === '') return;
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
