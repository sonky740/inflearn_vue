<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="">Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      const contactData = {
        id: new Date().toISOString(),
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
        isFavorite: false,
      };
      this.$emit('add-contact', contactData);

      this.enteredName = '';
      this.enteredPhone = '';
      this.enteredEmail = '';
    },
  },
};
</script>

<style scoped></style>
