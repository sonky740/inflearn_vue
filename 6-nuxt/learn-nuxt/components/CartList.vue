<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
        class="list-item"
      >
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '~/store';

export default {
  // asyncData는 components에서 못쓰므로 fetch를 씀
  // asyncData와 달리 fetch는 네트워크 상황에 따라 페이지 이동시에 약간의 깜빡임이 있을 수 있음.
  // asyncData는 this가 안됨.
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS);
  },
};
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
