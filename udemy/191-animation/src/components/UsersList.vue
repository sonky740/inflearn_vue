<template>
  <TransitionGroup name="user-list" tag="ul">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>
  <form @submit.prevent="addUser">
    <input type="text" v-model="input" />
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
      input: '',
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.input);
      this.input = '';
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

/* .user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

.user-list-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: userList 0.3s ease-out;
}

.user-list-leave-active {
  position: absolute;
  animation: userList 0.3s ease-out reverse;
}

/* .user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.user-list-move {
  transition: transform 0.3s ease-out;
}

@keyframes userList {
  0% {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
