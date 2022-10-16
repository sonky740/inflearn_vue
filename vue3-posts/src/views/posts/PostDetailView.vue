<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const router = useRouter();
/**
 * ref
 * 장점) 객체 할당 가능
 * 장점) 일관성 유지
 * 단점) .value로 접근해야 함
 *
 * reactive
 * 장점) .value로 접근 안해도 됨
 * 단점) 객체 할당 불가능
 */
const post = ref({});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};
const setPost = ({ title, content, createdAt }) => {
  post.value = {
    title,
    content,
    createdAt: new Date(createdAt).toLocaleString(),
  };
};
fetchPost();

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?')) {
      await deletePost(props.id);
      goListPage();
    }
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: props.id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
