<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script>
import BaseBadge from './BaseBadge.vue';
import BaseCard from './BaseCard.vue';

export default {
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
/* section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
</style>
