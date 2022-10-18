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
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/hooks/useAlert.js';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const error = ref('');
const loading = ref(false);

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

const save = async () => {
  try {
    loading.value = true;
    const data = {
      ...form.value,
      createdAt: getCurrentDate(),
    };
    await createPost(data);
    router.push({ name: 'PostList' });
    vSuccess('등록이 완료되었습니다.');
  } catch (err) {
    vAlert(err.message);
    error.value = err;
  } finally {
    loading.value = false;
  }
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
