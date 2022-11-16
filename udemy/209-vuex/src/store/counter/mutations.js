export default {
  increment(state, payload) {
    state.counter = state.counter + (payload || 1);
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
