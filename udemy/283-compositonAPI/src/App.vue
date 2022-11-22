<template>
  <section class="container">
    <UserData
      :first-name="firstName"
      :last-name="lastName"
      @set-age="setNewAge"
    ></UserData>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Third Name" ref="thirdName" />
      <button @click="setThirdName">Set thirdName Name</button>
    </div>
    <p>{{ fullName }}</p>
  </section>
</template>

<script setup>
// import { reactive, ref, isRef, isReactive, toRefs } from 'vue';
import { reactive, ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const user = reactive({
  name: 'Maximilian',
  age: 31,
});
const firstName = ref('');
const lastName = ref('');
const thirdName = ref(null);

const setNewAge = () => {
  user.age++;
};

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

watch(
  () => user.age,
  (newValue, oldValue) => {
    console.log('watch', newValue, oldValue);
  }
);

const setThirdName = () => {
  lastName.value = thirdName.value.value;
};

provide('user', user);

// const userName = ref('Maximilian');
// const age = ref(31);
// setTimeout(() => {
//   user.name = 'Anna';
//   user.age = 28;
//   userName.value = 'Anna';
//   age.value = 28;
// }, 2000);
// console.log(isRef(userName));
// console.log(isReactive(user));
// const userRef = toRefs(user);
// console.log(userRef);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
