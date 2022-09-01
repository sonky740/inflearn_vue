<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button :disabled="!isUsernameValid || !password || !nickname">
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };

        const { data } = await registerUser(userData);
        this.logMessage = `${data.username}님이 가입되었습니다.`;
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
