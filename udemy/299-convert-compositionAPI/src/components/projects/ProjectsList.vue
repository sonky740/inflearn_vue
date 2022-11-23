<template>
  <base-container v-if="props.user">
    <h2>{{ props.user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { defineProps, ref, computed, watch } from 'vue';
import ProjectItem from './ProjectItem.vue';

const props = defineProps({
  user: Object,
});

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});

const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

const updateSearch = (val) => {
  enteredSearchTerm.value = val;
};

watch(enteredSearchTerm, (val) => {
  const timer = setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 500);
  return () => clearTimeout(timer);
});

watch(
  () => props.user,
  (val) => {
    if (val) {
      enteredSearchTerm.value = '';
      activeSearchTerm.value = '';
    }
  }
);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
