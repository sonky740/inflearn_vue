import ListView from './ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
  return {
    name,
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
    // 재사용할 컴포넌트 옵션들
    render(createElement) {
      return createElement(ListView);
    },
  };
}
