<template>
  <AppCard>
    <h5 class="card-title text-truncate">{{ title }}</h5>
    <p class="card-text text-truncate">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdAt }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button type="button" class="btn p-1" @click.stop="$emit('modal')">
          <i class="bi bi-emoji-sunglasses"></i>
        </button>
        <button type="button" class="btn p-1" @click.stop="$emit('preview')">
          <i class="bi bi-app"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: [String, Date, Number],
    required: true,
  },
});

defineEmits(['modal', 'preview']);
</script>

<style lang="scss" scoped></style>
