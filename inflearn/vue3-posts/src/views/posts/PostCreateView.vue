<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          목록
        </button>
        <button class="btn btn-primary" type="submit" :disabled="loading">
          <template v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else>저장</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/hooks/useAlert.js';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

// 현재 년, 월, 시, 분, 초
const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const { error, loading, execute } = useAxios(
  '/posts',
  { method: 'POST' },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: 'PostList' });
      vSuccess('등록이 완료되었습니다!');
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);
const save = async () => {
  execute({ ...form.value, createAt: getCurrentDate() });
};

const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

// alert
const { vAlert, vSuccess } = useAlert();
</script>

<style lang="scss" scoped></style>
