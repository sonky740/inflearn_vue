<template>
  <Teleport to="#modal">
    <dialog open>
      <slot></slot>
    </dialog>
  </Teleport>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  margin: 0;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
