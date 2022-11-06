<template>
  <section>
    <form @submit.prevent="submitData">
      <input
        type="text"
        placeholder="Your name"
        v-model="enteredName"
        required
      />
      <input
        type="number"
        placeholder="Your age"
        v-model="enteredAge"
        required
        max="150"
      />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('set-user', this.enteredName, this.enteredAge);
      this.enteredName = '';
      this.enteredAge = '';
    },
  },
};
</script>
