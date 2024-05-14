<script setup>

  const props = defineProps({
    countValue: {
      type: Number,
      default: 0,
    }
  })

  defineEmits(['update:increment', 'update:decrement'])
</script>

<template>
  <div>
    <div class="flex flex-row space-x-3">
    <button @click="$emit('update:increment')">Increment</button>
    <span>{{ countValue }}</span>
    <button @click="$emit('update:decrement')">Decrement</button>
  </div>
  </div>
</template>

<style scoped></style>
