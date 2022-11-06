<template>
  <div>
    <ActiveUser :name="user.name" :age="user.age" />
    <UserData @set-user="setUserData" />
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      user: {
        name: 'Sonky',
        age: 30,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style></style>
