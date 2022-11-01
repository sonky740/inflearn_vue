<template>
  <div>
    <h2>Hove View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button type="button" class="btn btn-primary" @click="goAboutPage">
      About 이동
    </button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <!-- <h2>{{ $person.name }}</h2>
    <button type="button" class="btn btn-primary" @click="person.say()">
      click person
    </button> -->
    <h2>{{ position }}</h2>
    <h2>x: {{ x }}, y: {{ y }}</h2>
    <button type="button" @click="increase">position++</button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goAboutPage = () => {
  router.push({
    name: 'About',
  });
};

const items = ref(['사과', '배', '딸기', '포도', '바나나', '수박']);

// const person = inject('person');
// console.log('person.name: ', person.name);

const position = reactive({
  x: 100,
  y: 1000,
});

const increase = () => {
  position.x++;
  position.y++;
};

const { x, y } = position;
// const { x, y } = toRefs(position); // 구조분해할당으로 반응형이 깨져서 toRefs로 유지 가능.
// const x = toRef(position, 'x'); // toRef로 유지 가능.
// const y = toRef(position, 'y'); // toRef로 유지 가능.
</script>

<style lang="scss" scoped></style>
