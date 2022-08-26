<template>
  <div>
    <form class="inputBox shadow" @submit.prevent="addTodo">
      <input type="text" v-model="newTodoItem" />
      <button class="addBtn">
        <i class="fas fa-plus"></i>
      </button>
    </form>
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3 class="modalTitle">
          경고
          <button
            type="button"
            class="closeModalBtn"
            @click="showModal = false"
          >
            <i class="fas fa-times"></i>
          </button>
        </h3>
      </template>
      <template #body>
        <div>아무것도 입려하지 않으셨습니다.</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import CModal from './common/CModal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem.trim() !== '') {
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal: CModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  display: flex;
  height: 50px;
  background: #fff;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  flex: 1;
  padding: 0 1rem;
  border-style: none;
  font-size: 0.9rem;
}

.addBtn {
  float: right;
  width: 3rem;
  height: 100%;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border: none;
  border-radius: 0 5px 5px 0;
  color: #fff;
  vertical-align: middle;
}

.modalTitle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.closeModalBtn {
  border: none;
  background: transparent;
  color: #42b983;
}
</style>
