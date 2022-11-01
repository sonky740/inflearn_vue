<template>
  <div>
    <ul>
      <list-item>아이템 1</list-item>
      <list-item>
        아이템 2
        <button>click me</button>
      </list-item>
      <list-item>
        아이템 3
        <img src="./assets/logo.png" alt="로고" />
      </list-item>
      <list-item style="color: blue; font-size: 1.5rem">아이템 4</list-item>
      <list-item>아이템 5</list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './components/slot/ListItem.vue';

export default {
  components: {
    ListItem,
  },
};
</script>

<style></style>
