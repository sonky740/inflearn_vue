<template>
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div
        v-for="({ message, type }, index) in alerts"
        :key="index"
        class="alert"
        :class="typeStyle(type)"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useAlert } from '@/hooks/useAlert';

const { alerts } = useAlert();
const typeStyle = type => {
  return type === 'error' ? 'alert-danger' : 'alert-primary';
};
</script>

<style lang="scss" scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
