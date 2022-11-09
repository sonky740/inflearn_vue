<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ item.name }}</h3>
        <BaseButton mode="flat" @click="deleteResource(item.id)">
          Delete
        </BaseButton>
      </header>
      <p>{{ item.description }}</p>
      <nav>
        <a :href="item.link" target="_blank">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';

export default {
  components: {
    BaseCard,
    BaseButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  inject: {
    deleteResource: {
      default: () => {},
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
