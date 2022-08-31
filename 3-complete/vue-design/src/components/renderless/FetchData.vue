<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    axios
      .get(this.url)
      .then((response) => {
        this.response = response.data;
        this.loading = false;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>
