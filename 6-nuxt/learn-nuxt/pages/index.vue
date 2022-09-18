<template>
  <div class="app">
    <main>
      <SearchInput
        v-model="searchKeyword"
        @search="searchProducts"
      ></SearchInput>
      <ul class="list-wrap">
        <li v-for="product in products" :key="product.id" class="item flex">
          <NuxtLink :to="`detail/${product.id}`">
            <img
              :src="product.imageUrl"
              :alt="product.name"
              class="product-image"
            />
            <p>{{ product.name }}</p>
            <span>{{ product.price }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '@/api';

export default {
  components: { SearchInput },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      };
    });
    return { products };
  },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword);
      this.products = response.data.map(item => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        };
      });
    },
    moveToCartPage() {
      this.$router.push('/cart');
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}
.list-wrap {
  text-align: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;

  p {
    margin: 4px 0;
  }

  a {
    color: inherit;
  }
}

.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
