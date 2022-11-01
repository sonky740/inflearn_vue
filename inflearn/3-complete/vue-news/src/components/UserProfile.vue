<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- <div>username: {{ info.user || info.id }}</div> -->
      </slot>
      <div class="time">
        <slot name="time">
          <!-- {{ info.created || info.time_ago }} -->
        </slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   info: Object,
  // },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 0.5rem;
}

.time {
  font-size: 0.7rem;
}
</style>
