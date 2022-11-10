<template>
  <ul>
    <li :class="{ active: activeOption === 'Poor' }">
      <button type="button" @click="activate('Poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'Average' }">
      <button type="button" @click="activate('Average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'Great' }">
      <button type="button" @click="activate('Great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue, // 당연히 안됨.
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  display: flex;
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
