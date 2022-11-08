<template>
  <div>
    <TheHeader />
    <button type="button" @click="setSelectedComponent('ActiveGoals')">
      Active Goals
    </button>
    <button type="button" @click="setSelectedComponent('ManageGoals')">
      Manage Goals
    </button>
    <!-- <ManageGoals v-if="selectedComponent === 'ActiveGoals'"></ManageGoals>
    <ActiveGoals v-if="selectedComponent === 'ManageGoals'"></ActiveGoals> -->
    <KeepAlive>
      <component :is="selectedComponent" />
    </KeepAlive>

    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </CourseGoals> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    ManageGoals,
    ActiveGoals,
    // BadgeList,
    // UserInfo,F
    // CourseGoals,
  },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
