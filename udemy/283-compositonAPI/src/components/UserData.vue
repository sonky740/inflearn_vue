<template>
  <div>
    <h2>{{ props.firstName }}</h2>
    <h3>{{ user.age }}</h3>
    <p>{{ fullName }}</p>
    <button @click="setAge">Set Age</button>
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  defineEmits,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
});

const user = inject('user');

const emit = defineEmits(['set-age']);

const setAge = () => {
  emit('set-age');
};

const fullName = computed(() => {
  return `${props.firstName} ${props.lastName}`;
});

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});
</script>

<style scoped></style>
