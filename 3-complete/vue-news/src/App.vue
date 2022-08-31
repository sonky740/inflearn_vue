<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <loading-spinner :loading="loadingStatus"></loading-spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import bus from './utils/bus';

export default {
  components: {
    ToolBar,
    LoadingSpinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover,
a:focus {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
