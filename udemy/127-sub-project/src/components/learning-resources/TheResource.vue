<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('StoredResource')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </BaseButton>
    <BaseButton @click="setSelectedTab('AddResource')" :mode="addResButtonMode">
      Add Resource
    </BaseButton>
  </BaseCard>
  <KeepAlive>
    <component :is="selectedTab"></component>
  </KeepAlive>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    BaseCard,
    BaseButton,
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'StoredResource',
      storedResources: [
        {
          id: 'official-guide',
          name: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          name: 'Google Guide',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(name, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        name,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResource';
    },
    deleteResource(resId) {
      // provide/inject를 쓰면 배열을 통으로 바꾸는 방법을 못씀. => 기존 배열을 수정해야함.
      // this.storedResources = this.storedResources.filter((res) => {
      //   console.log(res.id, resId);
      //   return res.id !== resId;
      // });
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style scoped></style>
