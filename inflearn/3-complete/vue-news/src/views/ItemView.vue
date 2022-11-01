<template>
  <div>
    <!-- 사용자 정보 -->
    <section>
      <user-profile :info="fetchedItem">
        <div slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        </div>
        <template slot="time">
          {{ 'Posted ' + fetchedItem.time_ago}}
        </template>
      </user-profile>
    </section>
    <!-- 질문 타이틀 -->
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <!-- 질문 본문 -->
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped></style>
