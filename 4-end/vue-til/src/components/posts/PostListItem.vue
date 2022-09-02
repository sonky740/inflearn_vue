<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <button
        type="button"
        class="icon ion-md-create"
        @click="routeEditPage"
      ></button>
      <button
        type="button"
        class="icon ion-md-trash"
        @click="deleteItem"
      ></button>
    </div>
  </li>
</template>

<script>
import { deletePosts } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
    async deleteItem() {
      try {
        if (confirm('You want to delete it?')) {
          await deletePosts(this.postItem._id);
          this.$emit('refresh');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>

<style></style>
