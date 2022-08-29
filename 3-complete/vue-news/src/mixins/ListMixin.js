import bus from '../utils/bus';
import ListItem from '../components/ListItem.vue';

export default {
  // 재사용할 컴포넌트 옵션
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
