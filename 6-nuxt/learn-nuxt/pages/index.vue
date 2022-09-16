<template>
  <div class="app">
    <main>
      <SearchInput></SearchInput>
      <ul>
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
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';

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
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
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
